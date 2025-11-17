import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shuffle } from 'lucide-react';
import { RedFlagFlashcard } from '@/components/red-flags/RedFlagFlashcard';
import { redFlagCards } from '@/data/redFlags';
import { shuffleArray } from '@/lib/utils';

export function RedFlagsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState(redFlagCards);
  const [mode, setMode] = useState<'browse' | 'study'>('browse');

  const handleShuffle = () => {
    setCards(shuffleArray(redFlagCards));
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSelectCard = (index: number) => {
    setCurrentIndex(index);
    setMode('study');
  };

  if (mode === 'study') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Red Flag Recognition Trainer</h1>
            <p className="text-muted-foreground">
              Study critical warning signs requiring immediate action
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleShuffle} variant="outline" size="sm">
              <Shuffle className="h-4 w-4 mr-2" />
              Shuffle
            </Button>
            <Button onClick={() => setMode('browse')} variant="outline" size="sm">
              Browse All
            </Button>
          </div>
        </div>

        <RedFlagFlashcard
          card={cards[currentIndex]}
          onNext={handleNext}
          onPrevious={handlePrevious}
          currentIndex={currentIndex}
          totalCards={cards.length}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Red Flag Recognition</h1>
        <p className="text-muted-foreground">
          Master identification of high-risk symptoms requiring immediate action
        </p>
      </div>

      <Card className="bg-accent/30">
        <CardHeader>
          <CardTitle>How to Use This Trainer</CardTitle>
          <CardDescription>
            Click any red flag card to start studying. Test yourself by trying to recall the
            red flags, differentials, and immediate actions before revealing them.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setMode('study')}>
            Start Studying
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {redFlagCards.map((card, index) => (
          <Card
            key={card.id}
            className="hover:bg-accent/50 transition-all cursor-pointer"
            onClick={() => handleSelectCard(index)}
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="text-lg">{card.symptom}</CardTitle>
                <AlertTriangle className="h-6 w-6 text-critical flex-shrink-0" />
              </div>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="critical" className="text-xs">
                  {card.redFlags.length} Red Flags
                </Badge>
                <Badge variant="outline" className="text-xs ml-2">
                  {card.differentials.length} Differentials
                </Badge>
                <Badge variant="stable" className="text-xs ml-2">
                  {card.immediateActions.length} Actions
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
