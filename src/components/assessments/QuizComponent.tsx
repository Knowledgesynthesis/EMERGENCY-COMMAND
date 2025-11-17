import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Clock, Award } from 'lucide-react';
import type { Assessment, Question } from '@/types';
import { calculateScore, getScoreGrade, formatTime } from '@/lib/utils';

interface QuizComponentProps {
  assessment: Assessment;
  onComplete: (score: number, timeTaken: number) => void;
}

export function QuizComponent({ assessment, onComplete }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Map<string, string[]>>(new Map());
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(assessment.timeLimit || 0);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    if (assessment.timeLimit && !showResults) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showResults]);

  const handleAnswerSelect = (questionId: string, answerId: string, isMultiSelect: boolean) => {
    const newAnswers = new Map(selectedAnswers);
    const current = newAnswers.get(questionId) || [];

    if (isMultiSelect) {
      if (current.includes(answerId)) {
        newAnswers.set(
          questionId,
          current.filter((id) => id !== answerId)
        );
      } else {
        newAnswers.set(questionId, [...current, answerId]);
      }
    } else {
      newAnswers.set(questionId, [answerId]);
    }

    setSelectedAnswers(newAnswers);
  };

  const isAnswerCorrect = (question: Question): boolean => {
    const userAnswers = selectedAnswers.get(question.id) || [];
    if (userAnswers.length !== question.correctAnswers.length) return false;

    const sorted1 = [...userAnswers].sort();
    const sorted2 = [...question.correctAnswers].sort();
    return sorted1.every((val, index) => val === sorted2[index]);
  };

  const handleNext = () => {
    if (currentQuestion < assessment.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
    const correctCount = assessment.questions.filter(isAnswerCorrect).length;
    const score = calculateScore(correctCount, assessment.questions.length);
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    onComplete(score, timeTaken);
  };

  const question = assessment.questions[currentQuestion];
  const userAnswer = selectedAnswers.get(question.id) || [];
  const isMultiSelect = question.type === 'multiple-select';

  if (showResults) {
    const correctCount = assessment.questions.filter(isAnswerCorrect).length;
    const score = calculateScore(correctCount, assessment.questions.length);
    const { grade, color } = getScoreGrade(score);
    const passed = score >= assessment.passingScore;

    return (
      <div className="space-y-6">
        <Card className={`border-2 ${passed ? 'border-stable' : 'border-warning'}`}>
          <CardHeader className={passed ? 'bg-stable/10' : 'bg-warning/10'}>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6" />
              Assessment Complete
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="text-center">
              <div className={`text-6xl font-bold mb-2 ${color}`}>{score}%</div>
              <div className="text-2xl font-semibold mb-1">{grade}</div>
              <div className="text-muted-foreground">
                {correctCount} of {assessment.questions.length} correct
                {passed ? ' - You passed!' : ` - Passing score: ${assessment.passingScore}%`}
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-4">Question Review</h3>
              <div className="space-y-4">
                {assessment.questions.map((q, idx) => {
                  const correct = isAnswerCorrect(q);
                  return (
                    <Card key={q.id} className={correct ? 'border-stable' : 'border-critical'}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3">
                          {correct ? (
                            <CheckCircle className="h-5 w-5 text-stable flex-shrink-0 mt-1" />
                          ) : (
                            <XCircle className="h-5 w-5 text-critical flex-shrink-0 mt-1" />
                          )}
                          <div className="flex-1 space-y-2">
                            <div className="font-medium">
                              Question {idx + 1}: {q.question}
                            </div>
                            {!correct && (
                              <div className="text-sm">
                                <div className="text-critical">
                                  Your answer:{' '}
                                  {(selectedAnswers.get(q.id) || [])
                                    .map((id) => q.options.find((o) => o.id === id)?.text)
                                    .join(', ') || 'None'}
                                </div>
                                <div className="text-stable">
                                  Correct answer:{' '}
                                  {q.correctAnswers
                                    .map((id) => q.options.find((o) => o.id === id)?.text)
                                    .join(', ')}
                                </div>
                              </div>
                            )}
                            <div className="text-sm text-muted-foreground bg-muted p-3 rounded">
                              <strong>Explanation:</strong> {q.explanation}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>
            Question {currentQuestion + 1} of {assessment.questions.length}
          </span>
          {assessment.timeLimit && (
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {formatTime(timeRemaining)}
            </span>
          )}
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all"
            style={{
              width: `${((currentQuestion + 1) / assessment.questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2">{question.question}</CardTitle>
              {question.context && (
                <p className="text-sm text-muted-foreground">{question.context}</p>
              )}
            </div>
            <Badge variant="outline" className="capitalize">
              {question.difficulty}
            </Badge>
          </div>
          {isMultiSelect && (
            <p className="text-sm text-warning">Select all that apply</p>
          )}
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option) => {
            const isSelected = userAnswer.includes(option.id);
            return (
              <Button
                key={option.id}
                variant={isSelected ? 'default' : 'outline'}
                className="w-full justify-start text-left h-auto py-4 px-4"
                onClick={() => handleAnswerSelect(question.id, option.id, isMultiSelect)}
              >
                <div className="flex items-start gap-3 w-full">
                  <span className="font-semibold">{option.id.toUpperCase()}.</span>
                  <span className="flex-1">{option.text}</span>
                </div>
              </Button>
            );
          })}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          onClick={handlePrevious}
          variant="outline"
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        <div className="flex gap-2">
          {currentQuestion === assessment.questions.length - 1 ? (
            <Button onClick={handleSubmit}>Submit Assessment</Button>
          ) : (
            <Button onClick={handleNext}>Next Question</Button>
          )}
        </div>
      </div>
    </div>
  );
}
