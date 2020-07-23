// Action type
export const RECEIVE_POOLS = 'RECEIVE_POOLS';

// Receive pools action creator
export const receivePools = (pools) => ({
  // Return an action
  type: RECEIVE_POOLS,
  pools,
});

// Asynchronous action creator
