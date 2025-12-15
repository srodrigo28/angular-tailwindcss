import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

interface Course {
  name: string;
  videosWatched: number;
  totalVideos: number;
  completion: number;
  icon: string;
}

interface Achievement {
  month: string;
  level: string;
  description: string;
  icon: string;
  videosWatched: number;
  totalHours: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  user: { email: string, pass: string } | null = null;
  courses: Course[] = [];
  achievements: Achievement[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.loadCourses();
    this.loadAchievements();
  }

  loadCourses(): void {
    this.courses = [
      { name: 'Angular 19', videosWatched: 45, totalVideos: 50, completion: 90, icon: '🅰️' },
      { name: 'Angular 21', videosWatched: 10, totalVideos: 60, completion: 16, icon: '🅰️' },
      { name: 'Supabase', videosWatched: 25, totalVideos: 30, completion: 83, icon: '🔥' }
    ];
  }

  loadAchievements(): void {
    this.achievements = [
      { month: 'Dezembro', level: 'Ouro', description: 'Concluiu o módulo de RxJS', icon: '🥇', videosWatched: 30, totalHours: 8 },
      { month: 'Novembro', level: 'Prata', description: 'Finalizou 50 vídeos', icon: '🥈', videosWatched: 50, totalHours: 12 },
      { month: 'Outubro', level: 'Bronze', description: 'Iniciou sua jornada', icon: '🥉', videosWatched: 15, totalHours: 4 }
    ];
  }

  logout(): void {
    this.authService.logout();
  }
}


