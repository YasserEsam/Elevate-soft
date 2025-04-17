import { Card, CardContent } from '@/components/ui/card';

export default function SponsorCard({ sponsor }) {
  if (!sponsor) return null;
  
  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Project Sponsor
        </h3>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-lg">
            {sponsor.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-slate-900">{sponsor.name}</p>
            <p className="text-sm text-slate-500">{sponsor.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}