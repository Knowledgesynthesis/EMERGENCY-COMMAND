import { useState } from 'react';
import { useStore } from '@/store';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, ArrowLeft } from 'lucide-react';
import { CaseSimulator } from '@/components/cases/CaseSimulator';
import { cases } from '@/data/cases';

export function CasesPage() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const { completeCase } = useStore();

  const currentCase = cases.find((c) => c.id === selectedCase);

  const handleCaseComplete = () => {
    if (selectedCase) {
      completeCase(selectedCase);
    }
  };

  if (currentCase) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedCase(null)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cases
          </Button>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{currentCase.title}</h1>
          <p className="text-muted-foreground">
            Interactive clinical scenario - make decisions and receive feedback
          </p>
        </div>

        <CaseSimulator caseScenario={currentCase} onComplete={handleCaseComplete} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Case Simulations</h1>
        <p className="text-muted-foreground">
          Practice emergency decision-making with realistic clinical scenarios
        </p>
      </div>

      {cases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((caseScenario) => (
            <Card
              key={caseScenario.id}
              className="hover:bg-accent/50 transition-all cursor-pointer"
              onClick={() => setSelectedCase(caseScenario.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg">{caseScenario.title}</CardTitle>
                  <Brain className="h-6 w-6 text-primary flex-shrink-0" />
                </div>
                <CardDescription className="line-clamp-2">
                  {caseScenario.presentation}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="capitalize">
                    {caseScenario.difficulty}
                  </Badge>
                  <Badge variant="secondary">
                    {caseScenario.correctActions.length} Key Actions
                  </Badge>
                  <Badge variant="outline">
                    {caseScenario.history.age}yo {caseScenario.history.sex}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <CardHeader>
            <Brain className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <CardTitle>No Cases Available</CardTitle>
            <CardDescription>
              Case simulations are being developed. Check back soon!
            </CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
}
