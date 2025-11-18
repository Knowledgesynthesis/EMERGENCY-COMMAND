import { useState } from 'react';
import { useStore } from '@/store';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, ArrowLeft, Clock, Target } from 'lucide-react';
import { QuizComponent } from '@/components/assessments/QuizComponent';
import { assessments } from '@/data/assessments';
import { formatTime } from '@/lib/utils';

export function AssessmentsPage() {
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null);
  const { addAssessmentScore } = useStore();

  const currentAssessment = assessments.find((a) => a.id === selectedAssessment);

  const handleAssessmentComplete = (score: number, timeTaken: number) => {
    if (selectedAssessment) {
      addAssessmentScore(selectedAssessment, score, timeTaken);
    }
  };

  const handleBack = () => {
    setSelectedAssessment(null);
  };

  if (currentAssessment) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={handleBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Assessments
          </Button>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{currentAssessment.title}</h1>
          <p className="text-muted-foreground">{currentAssessment.description}</p>
        </div>

        <QuizComponent
          assessment={currentAssessment}
          onComplete={handleAssessmentComplete}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Assessments</h1>
        <p className="text-muted-foreground">
          Test your knowledge with evidence-based emergency medicine questions
        </p>
      </div>

      <Card className="bg-accent/30">
        <CardHeader>
          <CardTitle>Assessment Instructions</CardTitle>
          <CardDescription>
            Each assessment contains multiple choice questions with detailed rationales.
            Review all explanations after completion to reinforce learning.
          </CardDescription>
        </CardHeader>
      </Card>

      {assessments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assessments.map((assessment) => (
            <Card
              key={assessment.id}
              className="hover:bg-accent/50 transition-all cursor-pointer"
              onClick={() => setSelectedAssessment(assessment.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg">{assessment.title}</CardTitle>
                  <FileText className="h-6 w-6 text-primary flex-shrink-0" />
                </div>
                <CardDescription className="line-clamp-2">
                  {assessment.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    {assessment.questions.length} Questions
                  </Badge>
                  {assessment.timeLimit && (
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatTime(assessment.timeLimit)}
                    </Badge>
                  )}
                  <Badge variant="stable" className="text-xs">
                    <Target className="h-3 w-3 mr-1" />
                    Pass: {assessment.passingScore}%
                  </Badge>
                </div>
                <Button className="w-full" onClick={() => setSelectedAssessment(assessment.id)}>
                  Start Assessment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <CardHeader>
            <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <CardTitle>No Assessments Available</CardTitle>
            <CardDescription>
              Assessment modules are currently in development.
            </CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
}
