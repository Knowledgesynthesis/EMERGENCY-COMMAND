import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Clock, Activity } from 'lucide-react';
import type { CaseScenario } from '@/types';

interface CaseSimulatorProps {
  caseScenario: CaseScenario;
  onComplete: (score: number) => void;
}

export function CaseSimulator({ caseScenario, onComplete }: CaseSimulatorProps) {
  const [selectedActions, setSelectedActions] = useState<Set<string>>(new Set());
  const [revealedFeedback, setRevealedFeedback] = useState<Map<string, boolean>>(new Map());
  const [showResults, setShowResults] = useState(false);

  const allActions = [...caseScenario.correctActions, ...caseScenario.incorrectActions];

  const toggleAction = (actionId: string) => {
    const newSelected = new Set(selectedActions);
    if (newSelected.has(actionId)) {
      newSelected.delete(actionId);
    } else {
      newSelected.add(actionId);
    }
    setSelectedActions(newSelected);

    // Reveal feedback for this action
    const newFeedback = new Map(revealedFeedback);
    newFeedback.set(actionId, true);
    setRevealedFeedback(newFeedback);
  };

  const calculateScore = () => {
    const correctSelected = caseScenario.correctActions.filter((a) =>
      selectedActions.has(a.id)
    ).length;
    const incorrectSelected = caseScenario.incorrectActions.filter((a) =>
      selectedActions.has(a.id)
    ).length;
    const totalCorrect = caseScenario.correctActions.length;

    // Score = (correct selected - incorrect selected) / total correct * 100
    const rawScore = ((correctSelected - incorrectSelected) / totalCorrect) * 100;
    return Math.max(0, Math.min(100, Math.round(rawScore)));
  };

  const handleSubmit = () => {
    setShowResults(true);
    const score = calculateScore();
    onComplete(score);
  };

  const handleReset = () => {
    setSelectedActions(new Set());
    setRevealedFeedback(new Map());
    setShowResults(false);
  };

  const vitalsDisplay = (vitals: typeof caseScenario.initialVitals) => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
      <div>
        <div className="text-muted-foreground">HR</div>
        <div className="font-semibold">{vitals.heartRate} bpm</div>
      </div>
      <div>
        <div className="text-muted-foreground">BP</div>
        <div className="font-semibold">
          {vitals.bloodPressure.systolic}/{vitals.bloodPressure.diastolic}
        </div>
      </div>
      <div>
        <div className="text-muted-foreground">RR</div>
        <div className="font-semibold">{vitals.respiratoryRate}/min</div>
      </div>
      <div>
        <div className="text-muted-foreground">SpO₂</div>
        <div className="font-semibold">{vitals.oxygenSaturation}%</div>
      </div>
      <div>
        <div className="text-muted-foreground">Temp</div>
        <div className="font-semibold">{vitals.temperature}°C</div>
      </div>
      {vitals.gcs && (
        <div>
          <div className="text-muted-foreground">GCS</div>
          <div className="font-semibold">{vitals.gcs}</div>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Patient Presentation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Patient Presentation</CardTitle>
            <Badge variant="outline" className="capitalize">
              {caseScenario.difficulty}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Chief Complaint</h4>
            <p>{caseScenario.history.chiefComplaint}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Presentation</h4>
            <p>{caseScenario.presentation}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Initial Vitals</h4>
            {vitalsDisplay(caseScenario.initialVitals)}
          </div>
        </CardContent>
      </Card>

      {/* Patient History */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">History & Physical</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-sm mb-1">Demographics</h4>
              <p className="text-sm">
                {caseScenario.history.age}yo {caseScenario.history.sex === 'M' ? 'Male' : 'Female'}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1">Allergies</h4>
              <p className="text-sm">{caseScenario.history.allergies.join(', ')}</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1">History of Present Illness</h4>
            <p className="text-sm">{caseScenario.history.hpi}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1">Past Medical History</h4>
            <p className="text-sm">{caseScenario.history.pmh.join(', ')}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1">Physical Exam</h4>
            <div className="text-sm space-y-1">
              <p>
                <strong>General:</strong> {caseScenario.physicalExam.general}
              </p>
              {caseScenario.physicalExam.cardiovascular && (
                <p>
                  <strong>CV:</strong> {caseScenario.physicalExam.cardiovascular}
                </p>
              )}
              {caseScenario.physicalExam.respiratory && (
                <p>
                  <strong>Resp:</strong> {caseScenario.physicalExam.respiratory}
                </p>
              )}
              {caseScenario.physicalExam.neurological && (
                <p>
                  <strong>Neuro:</strong> {caseScenario.physicalExam.neurological}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            What actions will you take?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Select all appropriate actions for this patient. You'll receive immediate feedback.
          </p>
          <div className="space-y-2">
            {allActions
              .sort(() => Math.random() - 0.5)
              .map((action) => {
                const isSelected = selectedActions.has(action.id);
                const showFeedback = revealedFeedback.get(action.id);

                return (
                  <div key={action.id} className="space-y-2">
                    <Button
                      variant={isSelected ? 'default' : 'outline'}
                      className="w-full justify-start text-left h-auto py-3"
                      onClick={() => toggleAction(action.id)}
                      disabled={showResults}
                    >
                      <div className="flex items-center gap-2 w-full">
                        {showFeedback && (
                          action.isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-stable flex-shrink-0" />
                          ) : (
                            <XCircle className="h-5 w-5 text-critical flex-shrink-0" />
                          )
                        )}
                        <span className="flex-1">{action.action}</span>
                      </div>
                    </Button>

                    {showFeedback && (
                      <div
                        className={`p-3 rounded-lg text-sm ${
                          action.isCorrect
                            ? 'bg-stable/10 border border-stable'
                            : 'bg-critical/10 border border-critical'
                        }`}
                      >
                        {action.feedback}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>

          {!showResults && (
            <div className="flex gap-2 pt-4">
              <Button onClick={handleSubmit} className="flex-1">
                Submit & See Results
              </Button>
              <Button onClick={handleReset} variant="outline">
                Reset
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Timeline */}
      {showResults && caseScenario.timeline.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Case Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {caseScenario.timeline.map((event, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-sm font-semibold text-muted-foreground">
                  T+{event.time} min
                </div>
                <div className="flex-1">
                  <p className="text-sm">{event.event}</p>
                  {event.vitals && (
                    <div className="mt-2 p-2 bg-muted rounded text-xs">
                      {event.vitals.heartRate && <span>HR: {event.vitals.heartRate} </span>}
                      {event.vitals.bloodPressure && (
                        <span>
                          BP: {event.vitals.bloodPressure.systolic}/
                          {event.vitals.bloodPressure.diastolic}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Results */}
      {showResults && (
        <Card className="border-primary">
          <CardHeader className="bg-primary/10">
            <CardTitle>Your Performance</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {calculateScore()}%
              </div>
              <p className="text-muted-foreground">
                {calculateScore() >= 80
                  ? 'Excellent performance!'
                  : calculateScore() >= 60
                  ? 'Good effort. Review the missed items.'
                  : 'Keep practicing. Review the key actions.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-semibold text-stable">
                  {caseScenario.correctActions.filter((a) => selectedActions.has(a.id)).length}/
                  {caseScenario.correctActions.length}
                </div>
                <div className="text-sm text-muted-foreground">Correct Actions</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-critical">
                  {caseScenario.incorrectActions.filter((a) => selectedActions.has(a.id)).length}
                </div>
                <div className="text-sm text-muted-foreground">Incorrect Actions</div>
              </div>
            </div>

            <Button onClick={handleReset} className="w-full" variant="outline">
              Try Again
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
