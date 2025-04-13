// components/sections/services/ServiceCard.jsx
import { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ServiceIcon } from './ServiceIcon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, BadgeCheck } from 'lucide-react';

const cardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    transition: (index) => ({
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
    }),
};
export const ServiceCard = memo(({ service, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={cardAnimation.hidden}
            animate={inView ? cardAnimation.visible : {}}
            transition={cardAnimation.transition(index)}
            className="h-full"
            style={{ willChange: 'opacity, transform' }}>
            <Card
                className="group p-8 h-full bg-white/70 rounded-2xl relative overflow-hidden"
                // Convert CSS transition to Framer Motion for better control
                as={motion.div}>
                {/* Corner background hover highlight */}
                <div
                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                    style={{
                        background: `linear-gradient(135deg, ${service.color}, transparent)`,
                    }}
                />

                {/* Bottom border hover animation */}
                <div
                    className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                    style={{
                        background: `linear-gradient(to right, transparent, ${service.color}, transparent)`,
                    }}
                />

                <ServiceIcon service={service} />

                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                        <li
                            key={i}
                            className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                            <BadgeCheck
                                className="h-5 w-5 mr-2 flex-shrink-0"
                                style={{ color: service.color }}
                            />
                            <span className="text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto">
                    <Button
                        variant="ghost"
                        className="px-0 font-medium text-gray-700 hover:text-gray-900 transition-colors group/btn relative">
                        <span
                            className="relative z-10 group-hover/btn:text-gray-900 transition-colors duration-300"
                            style={{ color: service.color }}>
                            Explore Service
                        </span>
                        <motion.div
                            className="ml-2 opacity-70 group-hover/btn:opacity-100 transition-opacity"
                            animate={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}>
                            <ArrowUpRight
                                className="h-4 w-4"
                                style={{ color: service.color }}
                            />
                        </motion.div>
                    </Button>
                </div>
            </Card>
        </motion.div>
    );
});

ServiceCard.displayName = 'ServiceCard';