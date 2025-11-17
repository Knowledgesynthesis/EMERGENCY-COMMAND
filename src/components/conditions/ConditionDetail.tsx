import { AlertTriangle, Clock, BookOpen, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getSeverityIcon } from '@/lib/utils';
import type { Condition } from '@/types';

interface ConditionDetailProps {
  condition: Condition;
}

export function ConditionDetail({ condition }: ConditionDetailProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{condition.name}</h1>
        <p className="text-lg text-muted-foreground">{condition.description}</p>
        <Badge variant="outline" className="mt-2 capitalize">
          {condition.category}
        </Badge>
      </div>

      {/* Time Targets */}
      {condition.timeTargets && condition.timeTargets.length > 0 && (
        <Card className="border-warning">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <Clock className="h-5 w-5" />
              Time-Critical Targets
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {condition.timeTargets.map((target, idx) => (
              <div key={idx} className="border-l-4 border-warning pl-4">
                <div className="font-semibold">{target.milestone}</div>
                <div className="text-lg text-warning">{target.target}</div>
                <div className="text-sm text-muted-foreground">{target.rationale}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Three Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Panel A: Stabilization */}
        <Card>
          <CardHeader className="bg-critical/10">
            <CardTitle className="text-lg">Panel A: Immediate Stabilization</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {condition.stabilization.map((step) => (
              <div key={step.id} className="space-y-1">
                <div className="flex items-start gap-2">
                  <Badge
                    variant={step.priority === 'critical' ? 'critical' : 'outline'}
                    className="text-xs mt-1"
                  >
                    {step.priority}
                  </Badge>
                  <div className="flex-1">
                    <div className="font-medium">{step.step}</div>
                    <div className="text-sm text-muted-foreground">
                      Timing: {step.timing}
                    </div>
                    {step.detail && (
                      <div className="text-sm text-muted-foreground mt-1">
                        {step.detail}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Panel B: Initial Tests */}
        <Card>
          <CardHeader className="bg-blue-500/10">
            <CardTitle className="text-lg">Panel B: Initial Diagnostic Steps</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {condition.initialTests.map((test) => (
              <div key={test.id} className="space-y-1">
                <div className="flex items-start gap-2">
                  <Badge
                    variant={test.priority === 'immediate' ? 'critical' : 'outline'}
                    className="text-xs mt-1"
                  >
                    {test.priority}
                  </Badge>
                  <div className="flex-1">
                    <div className="font-medium">{test.test}</div>
                    <div className="text-sm text-muted-foreground">
                      {test.reasoning}
                    </div>
                    {test.timing && (
                      <div className="text-sm text-warning mt-1">⏱ {test.timing}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Panel C: Critical Management */}
        <Card>
          <CardHeader className="bg-stable/10">
            <CardTitle className="text-lg">Panel C: Critical Management & Escalation</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {condition.criticalInterventions.map((intervention) => (
              <div key={intervention.id} className="space-y-1">
                <div className="flex items-start gap-2">
                  {intervention.critical && (
                    <Badge variant="critical" className="text-xs mt-1">
                      Critical
                    </Badge>
                  )}
                  <div className="flex-1">
                    <div className="font-medium">{intervention.intervention}</div>
                    <div className="text-sm text-muted-foreground">
                      {intervention.indication}
                    </div>
                    <div className="text-sm text-warning mt-1">
                      ⏱ {intervention.timing}
                    </div>
                    {intervention.contraindications && intervention.contraindications.length > 0 && (
                      <div className="text-sm text-critical mt-1">
                        ⚠ Contraindications: {intervention.contraindications.join(', ')}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Red Flags */}
      <Card className="border-critical">
        <CardHeader className="bg-critical/10">
          <CardTitle className="flex items-center gap-2 text-critical">
            <AlertTriangle className="h-5 w-5" />
            Red Flags
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          {condition.redFlags.map((flag) => (
            <div
              key={flag.id}
              className="border-l-4 border-critical pl-4 space-y-1"
            >
              <div className="flex items-start gap-2">
                <span className="text-lg">{getSeverityIcon(flag.severity)}</span>
                <div className="flex-1">
                  <div className="font-semibold">{flag.flag}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    <strong>Significance:</strong> {flag.significance}
                  </div>
                  <div className="text-sm mt-1">
                    <strong className="text-critical">Action:</strong> {flag.action}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Escalation Criteria */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Escalation Criteria
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {condition.escalation.map((esc) => (
            <div
              key={esc.id}
              className="flex items-start justify-between border rounded-lg p-3"
            >
              <div className="flex-1">
                <div className="font-medium">{esc.trigger}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Destination: {esc.destination}
                </div>
              </div>
              <Badge
                variant={esc.urgency === 'immediate' ? 'critical' : 'warning'}
                className="ml-2"
              >
                {esc.urgency}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Pitfalls */}
      <Card className="border-warning">
        <CardHeader className="bg-warning/10">
          <CardTitle className="flex items-center gap-2 text-warning">
            <BookOpen className="h-5 w-5" />
            Common Pitfalls to Avoid
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-2">
            {condition.pitfalls.map((pitfall, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-warning mt-1">⚠</span>
                <span>{pitfall}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Guidelines */}
      {condition.guidelines && condition.guidelines.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Referenced Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-1">
              {condition.guidelines.map((guideline, idx) => (
                <li key={idx}>• {guideline}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
