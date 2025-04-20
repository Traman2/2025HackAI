import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Battery, Zap, BarChart3 } from "lucide-react";

function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Powered by Advanced AI"
          subtitle="Discover how our energy prediction models can transform your energy management"
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <FeatureCard
            icon={<BarChart3 className="h-8 w-8" />}
            color="green"
            title="Consumption Forecasting"
            description="Our AI analyzes historical data to predict future energy usage with up to 95% accuracy, helping you plan and optimize your energy needs."
          />

          <FeatureCard
            icon={<Zap className="h-8 w-8" />}
            color="teal"
            title="Anomaly Detection"
            description="Automatically identify unusual energy consumption patterns to detect issues, prevent waste, and optimize system performance."
          />

          <FeatureCard
            icon={<Battery className="h-8 w-8" />}
            color="emerald"
            title="Cost Optimization"
            description="Receive personalized recommendations to shift energy usage to off-peak hours and reduce your utility bills by up to 30%."
          />
        </div>
      </div>
    </section>
  );
}

// Reusable Section Header Component
function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">{subtitle}</p>
    </motion.div>
  );
}

// Feature Card Component
function FeatureCard({
  icon,
  color,
  title,
  description,
}: {
  icon: React.ReactNode;
  color: "green" | "teal" | "emerald";
  title: string;
  description: string;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const colorClasses = {
    green: "bg-green-100 text-green-600",
    teal: "bg-teal-100 text-teal-600",
    emerald: "bg-emerald-100 text-emerald-600",
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        className={`${colorClasses[color]} p-3 rounded-2xl inline-block`}
      >
        {icon}
      </motion.div>
      <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-4 text-base text-gray-600 max-w-md">{description}</p>
      
    </motion.div>
  );
}

export default FeaturesSection;