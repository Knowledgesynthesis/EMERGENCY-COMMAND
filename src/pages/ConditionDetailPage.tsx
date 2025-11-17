import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useStore } from '@/store';
import { ConditionDetail } from '@/components/conditions/ConditionDetail';
import { Button } from '@/components/ui/button';

export function ConditionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { conditions } = useStore();

  const condition = conditions.find((c) => c.id === id);

  if (!condition) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-2">Condition Not Found</h2>
        <p className="text-muted-foreground mb-4">
          The condition you're looking for doesn't exist.
        </p>
        <Link to="/conditions">
          <Button>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Conditions
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/conditions">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Conditions
        </Button>
      </Link>

      <ConditionDetail condition={condition} />
    </div>
  );
}
