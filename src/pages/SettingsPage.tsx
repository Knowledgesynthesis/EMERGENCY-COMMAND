import { useStore } from '@/store';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function SettingsPage() {
  const { theme, toggleTheme, offlineMode, lastSync } = useStore();

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your preferences and app configuration
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize how the app looks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Theme</div>
              <div className="text-sm text-muted-foreground">
                Current theme: {theme === 'dark' ? 'Dark' : 'Light'}
              </div>
            </div>
            <Button onClick={toggleTheme} variant="outline">
              {theme === 'dark' ? (
                <>
                  <Sun className="h-4 w-4 mr-2" />
                  Switch to Light
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 mr-2" />
                  Switch to Dark
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Offline Mode</CardTitle>
          <CardDescription>App data and offline capabilities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Status</div>
              <div className="text-sm text-muted-foreground">
                {offlineMode ? 'Offline' : 'Online'}
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm ${
              offlineMode ? 'bg-warning/10 text-warning' : 'bg-stable/10 text-stable'
            }`}>
              {offlineMode ? 'Offline' : 'Online'}
            </div>
          </div>
          {lastSync && (
            <div>
              <div className="font-medium text-sm">Last Sync</div>
              <div className="text-sm text-muted-foreground">
                {new Date(lastSync).toLocaleString()}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
          <CardDescription>Information about Emergency Command</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            <strong>Version:</strong> 1.0.0
          </p>
          <p>
            Emergency Command is an educational platform for learning emergency stabilization,
            escalation, and early management for time-critical presentations in medicine.
          </p>
          <p className="text-xs mt-4">
            <strong>Disclaimer:</strong> This app is for educational purposes only and should
            not be used for actual clinical decision-making. Always follow your institution's
            protocols and consult with attending physicians.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
