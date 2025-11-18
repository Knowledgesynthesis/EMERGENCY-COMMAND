import { Link } from 'react-router-dom';
import { Heart, Brain, AlertTriangle, FileText, Search, BookOpen } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store';

export function HomePage() {
  const { userProgress } = useStore();

  const features = [
    {
      title: 'Emergency Conditions',
      description: 'Learn stabilization, diagnostics, and management for time-critical emergencies',
      icon: Heart,
      href: '/conditions',
      color: 'text-critical',
    },
    {
      title: 'Case Simulations',
      description: 'Practice emergency decision-making with realistic clinical scenarios',
      icon: Brain,
      href: '/cases',
      color: 'text-blue-500',
    },
    {
      title: 'Red Flag Recognition',
      description: 'Master identification of high-risk symptoms requiring immediate action',
      icon: AlertTriangle,
      href: '/red-flags',
      color: 'text-warning',
    },
    {
      title: 'Assessments',
      description: 'Test your knowledge with evidence-based emergency medicine questions',
      icon: FileText,
      href: '/assessments',
      color: 'text-stable',
    },
    {
      title: 'Medical Glossary',
      description: 'Quick reference for emergency medicine terminology and protocols',
      icon: BookOpen,
      href: '/glossary',
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Emergency Command
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master emergency stabilization, escalation, and early management for time-critical presentations
        </p>
      </div>

      {/* Search Bar */}
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search conditions, symptoms, or protocols..."
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      {userProgress && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {userProgress.stats.totalCasesCompleted}
                </div>
                <div className="text-sm text-muted-foreground mt-1">Cases Completed</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {userProgress.stats.averageAssessmentScore}%
                </div>
                <div className="text-sm text-muted-foreground mt-1">Avg Assessment Score</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {userProgress.conditionsStudied.length}
                </div>
                <div className="text-sm text-muted-foreground mt-1">Conditions Studied</div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Link key={feature.href} to={feature.href}>
              <Card className="hover:bg-accent/50 transition-all cursor-pointer h-full">
                <CardHeader>
                  <Icon className={`h-12 w-12 ${feature.color} mb-4`} />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    Explore →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Quick Start Guide */}
      <Card className="bg-accent/30">
        <CardHeader>
          <CardTitle>Quick Start Guide</CardTitle>
          <CardDescription>
            Emergency Command uses a systematic approach to emergency management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-critical text-critical-foreground flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <div className="font-semibold">Recognize Red Flags</div>
              <div className="text-sm text-muted-foreground">
                Identify high-risk symptoms requiring immediate intervention
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-warning text-warning-foreground flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <div className="font-semibold">Stabilize (ABCs)</div>
              <div className="text-sm text-muted-foreground">
                Address airway, breathing, and circulation first
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <div className="font-semibold">Rapid Diagnostics</div>
              <div className="text-sm text-muted-foreground">
                Order tests that change immediate management decisions
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stable text-stable-foreground flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <div className="font-semibold">Initiate Management & Escalate</div>
              <div className="text-sm text-muted-foreground">
                Start protocolized treatment and escalate to ICU/OR/specialty teams as needed
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
