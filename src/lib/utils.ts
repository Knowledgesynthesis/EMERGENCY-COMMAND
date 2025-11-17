import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function getPriorityColor(priority: 'critical' | 'high' | 'medium' | 'low' | 'immediate' | 'urgent' | 'standard'): string {
  switch (priority) {
    case 'critical':
    case 'immediate':
      return 'text-critical bg-critical/10 border-critical';
    case 'high':
    case 'urgent':
      return 'text-warning bg-warning/10 border-warning';
    case 'medium':
    case 'standard':
      return 'text-blue-500 bg-blue-500/10 border-blue-500';
    case 'low':
      return 'text-stable bg-stable/10 border-stable';
    default:
      return 'text-muted-foreground bg-muted border-border';
  }
}

export function getSeverityIcon(severity: 'critical' | 'high' | 'moderate' | 'low'): string {
  switch (severity) {
    case 'critical':
      return '🔴';
    case 'high':
      return '🟠';
    case 'moderate':
      return '🟡';
    case 'low':
      return '🟢';
    default:
      return '⚪';
  }
}

export function calculateScore(correct: number, total: number): number {
  return Math.round((correct / total) * 100);
}

export function getScoreGrade(score: number): { grade: string; color: string } {
  if (score >= 90) return { grade: 'Excellent', color: 'text-stable' };
  if (score >= 80) return { grade: 'Good', color: 'text-blue-500' };
  if (score >= 70) return { grade: 'Pass', color: 'text-warning' };
  return { grade: 'Needs Improvement', color: 'text-critical' };
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
