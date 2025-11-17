import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RotateCcw, ChevronRight, Eye, EyeOff } from 'lucide-react';
import type { RedFlagCard } from '@/types';

interface RedFlagFlashcardProps {
  card: RedFlagCard;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalCards: number;
}

export function RedFlagFlashcard({
  card,
  onNext,
  onPrevious,
  currentIndex,
  totalCards,
}: RedFlagFlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showRedFlags, setShowRedFlags] = useState(false);
  const [showDifferentials, setShowDifferentials] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setShowRedFlags(false);
      setShowDifferentials(false);
      setShowActions(false);
    }
  };

  const handleNext = () => {
    setIsFlipped(false);
    setShowRedFlags(false);
    setShowDifferentials(false);
    setShowActions(false);
    onNext();
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setShowRedFlags(false);
    setShowDifferentials(false);
    setShowActions(false);
    onPrevious();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Card {currentIndex + 1} of {totalCards}
        </span>
        <div className="flex gap-2">
          <Button onClick={handlePrevious} variant="outline" size="sm" disabled={currentIndex === 0}>
            Previous
          </Button>
          <Button
            onClick={handleNext}
            variant="outline"
            size="sm"
            disabled={currentIndex === totalCards - 1}
          >
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>

      <Card className="min-h-[500px] cursor-pointer" onClick={handleFlip}>
        <CardHeader className="bg-critical/10">
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-critical" />
            {card.symptom}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          {!isFlipped ? (
            <>
              <div className="text-center py-12">
                <p className="text-xl mb-2">{card.description}</p>
                <p className="text-sm text-muted-foreground mt-8">
                  Click to reveal red flags and management
                </p>
                <Eye className="h-12 w-12 mx-auto mt-4 text-muted-foreground" />
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-between mb-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRedFlags(!showRedFlags);
                  }}
                >
                  <span className="font-semibold text-critical">
                    🚩 Red Flags ({card.redFlags.length})
                  </span>
                  {showRedFlags ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                {showRedFlags && (
                  <ul className="space-y-2 ml-4">
                    {card.redFlags.map((flag, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="text-critical mt-0.5">•</span>
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-between mb-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDifferentials(!showDifferentials);
                  }}
                >
                  <span className="font-semibold">
                    🔍 Differential Diagnosis ({card.differentials.length})
                  </span>
                  {showDifferentials ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                {showDifferentials && (
                  <ul className="space-y-2 ml-4">
                    {card.differentials.map((diff, idx) => (
                      <li key={idx} className="text-sm">
                        • {diff}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-between mb-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowActions(!showActions);
                  }}
                >
                  <span className="font-semibold text-stable">
                    ⚡ Immediate Actions ({card.immediateActions.length})
                  </span>
                  {showActions ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                {showActions && (
                  <ul className="space-y-2 ml-4">
                    {card.immediateActions.map((action, idx) => (
                      <li key={idx} className="text-sm">
                        • {action}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-4 border-t">
                <div className="text-sm">
                  <strong>Escalation:</strong> {card.escalation}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button onClick={handleFlip} variant="outline">
          <RotateCcw className="h-4 w-4 mr-2" />
          {isFlipped ? 'Hide' : 'Reveal'} Details
        </Button>
      </div>
    </div>
  );
}
