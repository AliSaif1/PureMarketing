import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import processSteps from "../../data/process";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const handleStepChange = (newIndex) => {
    setDirection(newIndex > activeStep ? 1 : -1);
    setActiveStep(newIndex);
  };

  // Auto-advance steps (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-b from-secondary-100 to-secondary-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-secondary-800"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Process</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 text-secondary-600 max-w-2xl mx-auto"
            >
              A proven methodology for delivering exceptional results
            </motion.p>
          </div>

          {/* Step Indicators */}
          <div className="relative mb-8 md:mb-12 lg:mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-secondary-200 transform -translate-y-1/2 z-0 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-400 to-primary-600"
                initial={{ width: 0 }}
                animate={{
                  width: `${(activeStep + 1) * (100 / processSteps.length)}%`
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>

            <div className="relative flex justify-between z-10">
              {processSteps.map((step, index) => (
                <button
                  key={step.name}
                  onClick={() => handleStepChange(index)}
                  className="flex flex-col items-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full border-4 transition-all duration-300 ${index <= activeStep
                        ? "border-primary-100 bg-primary-600"
                        : "border-secondary-200 bg-white"
                      } group-hover:border-primary-200`}
                  >
                    <span
                      className={`text-base sm:text-lg font-bold ${index <= activeStep ? "text-white" : "text-secondary-400"
                        }`}
                    >
                      {step.id}
                    </span>
                  </motion.div>
                  <motion.span
                    className={`mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium ${index === activeStep
                        ? "text-primary-600 font-semibold"
                        : "text-secondary-500"
                      }`}
                  >
                    {step.name}
                  </motion.span>
                </button>
              ))}
            </div>
          </div>

          {/* Animated Content Area */}
          <div className="relative min-h-[540px] sm:min-h-[680px] lg:min-h-[500px] overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl bg-white shadow-md md:shadow-lg lg:shadow-xl">
            <AnimatePresence custom={direction}>
              <motion.div
                key={activeStep}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 p-4 sm:p-6 md:p-8 lg:p-12"
              >
                <div className="h-full flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                  <div className="flex flex-col justify-center order-2 lg:order-1">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                      <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 shadow-sm md:shadow-md">
                        <span className="text-sm sm:text-base md:text-lg font-bold text-white">
                          {processSteps[activeStep].id}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-secondary-800">
                        {processSteps[activeStep].name}
                      </h3>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm sm:text-base leading-6 sm:leading-7 text-secondary-700 mb-4 sm:mb-6 md:mb-8"
                    >
                      {getDetailedDescription(processSteps[activeStep].name)}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="flex gap-2 sm:gap-3 md:gap-4"
                    >
                      <button
                        onClick={() =>
                          handleStepChange(
                            (activeStep - 1 + processSteps.length) %
                            processSteps.length
                          )
                        }
                        className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 text-xs sm:text-sm md:text-base rounded-md border border-secondary-200 hover:bg-secondary-50 transition-colors"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() =>
                          handleStepChange((activeStep + 1) % processSteps.length)
                        }
                        className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 text-xs sm:text-sm md:text-base rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors shadow-sm"
                      >
                        Next
                      </button>
                    </motion.div>
                  </div>

                  <div className="flex lg:hidden items-center justify-center mb-4 sm:mb-6 order-1">
                    <div className="relative w-full h-40 sm:h-48 md:h-56">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-20 rounded-md" />
                      <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full h-full object-contain object-center p-4"
                        src={getStepIcon(processSteps[activeStep].name)}
                        alt={processSteps[activeStep].name}
                      />
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center justify-center relative order-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-20 rounded-lg" />
                    <motion.img
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-full max-h-[280px] lg:max-h-[320px] object-contain object-center p-6"
                      src={getStepIcon(processSteps[activeStep].name)}
                      alt={processSteps[activeStep].name}
                    />
                    <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary-400 opacity-10" />
                    <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-primary-300 opacity-10" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to get detailed descriptions
function getDetailedDescription(stepName) {
  const descriptions = {
    Discovery: `Our discovery phase is a comprehensive deep-dive into your business ecosystem. We conduct stakeholder interviews, market research, and competitive analysis to fully understand your position in the marketplace. Our expert team spends approximately 40–60 hours in this phase, identifying key pain points, uncovering opportunities, and establishing clear KPIs for success.`,
    Strategy: `The strategy phase transforms insights into actionable plans. Our cross-functional team collaborates to create a 360-degree strategy encompassing digital transformation, marketing, operations, and customer experience. We effectively employ frameworks like SWOT analysis, Porter's Five Forces, and the Blue Ocean Strategy to craft innovative strategic approaches.`,
    Execution: `Execution is where plans become reality. We implement with agile methodologies, providing bi-weekly progress reports and adjustment points. Our project management office ensures on-time, on-budget delivery while maintaining quality standards. We use JIRA, Asana, and Monday.com for clear workflow tracking, with a dedicated account manager as your single contact.`,
    Optimization: `Our optimization process never stops. We establish continuous feedback loops, A/B testing protocols, and performance monitoring systems. Monthly review sessions assess KPIs against benchmarks, with quarterly strategy refinements. We strategically leverage data analytics and advanced machine learning to identify improvement opportunities you might otherwise miss.`
  };
  return descriptions[stepName] || "Detailed description coming soon.";
}

// Helper function to get dummy icons
function getStepIcon(stepName) {
  const icons = {
    Discovery: "/discovery.svg",
    Strategy: "/strategy.svg",
    Execution: "/execution.svg",
    Optimization: "/optimization.svg"
  };
  return icons[stepName] || "/default.svg";
}