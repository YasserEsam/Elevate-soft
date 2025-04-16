//app/projects/[id]/components/SponsorCard.jsx
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { memo , useMemo} from 'react';
import { Card, CardContent } from '@/components/ui/card';

// Dynamically import components
const AvatarImage = dynamic(() =>
    import('@/components/ui/avatar').then((mod) => ({
        default: mod.AvatarImage,
    })),
);
const AvatarFallback = dynamic(() =>
    import('@/components/ui/avatar').then((mod) => ({
        default: mod.AvatarFallback,
    })),
);

const SponsorCard = memo(({ sponsor }) => {
    const avatarSize = useMemo(() => ({ width: 64, height: 64 }), []);

    return (
        <Card className="overflow-hidden border-0 shadow-lg">
            <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Project Sponsor
                </h3>
                <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            {...avatarSize}
                            className="object-cover"
                            loading="lazy"
                            quality={80}
                        />
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900">
                            {sponsor.name}
                        </p>
                        <p className="text-sm text-slate-500">
                            Industry Leader
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
});

SponsorCard.displayName = 'SponsorCard';
export default SponsorCard;
