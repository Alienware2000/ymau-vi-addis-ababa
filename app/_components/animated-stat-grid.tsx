import { AnimatedNumber } from "./animated-number";
import type { ConferenceMetric } from "../conference-metrics";

type AnimatedStatGridProps = {
  stats: readonly ConferenceMetric[];
  className?: string;
  ariaLabel?: string;
  itemElement?: "article" | "div";
  showDetail?: boolean;
};

export function AnimatedStatGrid({
  stats,
  className = "interactive-stats",
  ariaLabel = "Conference figures",
  itemElement = "article",
  showDetail = true,
}: AnimatedStatGridProps) {
  const Item = itemElement;

  return (
    <div className={className} aria-label={ariaLabel} data-animated-metric-grid="true">
      {stats.map((stat, index) => (
        <Item key={stat.id}>
          <AnimatedNumber
            value={stat.value}
            prefix={stat.prefix}
            suffix={stat.suffix}
            delay={index * 115}
          />
          <span>{stat.label}</span>
          {showDetail && stat.detail && <small>{stat.detail}</small>}
        </Item>
      ))}
    </div>
  );
}
