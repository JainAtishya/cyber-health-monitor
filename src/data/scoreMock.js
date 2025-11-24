// Mock Cyber Health Score
// This would typically be calculated based on various security factors
export const cyberHealthScore = 78;

export const calculateCyberHealthScore = (factors) => {
  const {
    passwordStrength = 0,
    deviceSecurity = 0,
    networkSafety = 0,
    breachRisk = 0,
  } = factors;

  // Weighted average of different security factors
  const score = Math.round(
    passwordStrength * 0.3 +
    deviceSecurity * 0.25 +
    networkSafety * 0.25 +
    breachRisk * 0.2
  );

  return Math.min(100, Math.max(0, score));
};
