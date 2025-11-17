import { Link } from 'react-router-dom';
import { Heart, Brain, Activity, Shield, Zap, Stethoscope, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Condition } from '@/types';

const categoryIcons = {
  cardiac: Heart,
  neuro: Brain,
  infectious: Activity,
  immunologic: Shield,
  abdominal: Stethoscope,
  trauma: TrendingUp,
  respiratory: Zap,
};

const categoryColors = {
  cardiac: 'text-red-500',
  neuro: 'text-purple-500',
  infectious: 'text-yellow-500',
  immunologic: 'text-blue-500',
  abdominal: 'text-green-500',
  trauma: 'text-orange-500',
  respiratory: 'text-cyan-500',
};

interface ConditionCardProps {
  condition: Condition;
}

export function ConditionCard({ condition }: ConditionCardProps) {
  const Icon = categoryIcons[condition.category] || Heart;
  const iconColor = categoryColors[condition.category] || 'text-gray-500';

  return (
    <Link to={`/conditions/${condition.id}`}>
      <Card className="hover:bg-accent/50 transition-all cursor-pointer h-full">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg mb-2">{condition.name}</CardTitle>
              <CardDescription className="text-sm">
                {condition.description}
              </CardDescription>
            </div>
            <Icon className={`h-8 w-8 ${iconColor} ml-2 flex-shrink-0`} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs capitalize">
              {condition.category}
            </Badge>
            {condition.redFlags.length > 0 && (
              <Badge variant="critical" className="text-xs">
                {condition.redFlags.length} Red Flags
              </Badge>
            )}
            {condition.timeTargets && condition.timeTargets.length > 0 && (
              <Badge variant="warning" className="text-xs">
                Time-Critical
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
