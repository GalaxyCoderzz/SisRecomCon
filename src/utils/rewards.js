// rewards.js

// This file exports utility functions related to rewards.

// List of available rewards and their corresponding points
const rewards = [
  { name: "OWL token", points: 100 },
  { name: "Battle pass", points: 500 },
  { name: "Exclusive skin", points: 1000 },
  { name: "Custom emote", points: 2000 },
];

/**
 * Retrieves all available rewards.
 * @returns {Array} - Array of available rewards.
 */
function getRewards() {
  return rewards;
}

/**
 * Retrieves the points required to redeem a specific reward.
 * @param {string} rewardName - The name of the reward.
 * @returns {number} - The points required to redeem the reward.
 */
function getPointsForReward(rewardName) {
  const reward = rewards.find((r) => r.name === rewardName);
  return reward ? reward.points : 0;
}

/**
 * Checks if a user has enough points to redeem a reward.
 * @param {number} userPoints - The current points of the user.
 * @param {string} rewardName - The name of the reward.
 * @returns {boolean} - True if the user has enough points, false otherwise.
 */
function canRedeemReward(userPoints, rewardName) {
  const requiredPoints = getPointsForReward(rewardName);
  return userPoints >= requiredPoints;
}

/**
 * Redeems a reward for a user by deducting the required points.
 * @param {number} userPoints - The current points of the user.
 * @param {string} rewardName - The name of the reward to redeem.
 * @returns {number} - The updated points of the user after redeeming the reward.
 */
function redeemReward(userPoints, rewardName) {
  const requiredPoints = getPointsForReward(rewardName);
  if (userPoints >= requiredPoints) {
    return userPoints - requiredPoints;
  } else {
    return userPoints;
  }
}

module.exports = {
  getRewards,
  getPointsForReward,
  canRedeemReward,
  redeemReward,
};
