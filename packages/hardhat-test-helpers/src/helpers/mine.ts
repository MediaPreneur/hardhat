import type { NumberLike } from "../types";
import { getHardhatProvider, toRpcQuantity } from "../utils";

/**
 * Mines a specified number of blocks at a given interval
 *
 * @param blocks Number of blocks to mine
 * @param options Interval to wait between blocks
 */
export async function mine(
  blocks: NumberLike = 1,
  options: { interval?: NumberLike } = {}
): Promise<void> {
  const provider = await getHardhatProvider();

  const interval = options.interval ?? 1;

  const blocksHex = toRpcQuantity(blocks);
  const intervalHex = toRpcQuantity(interval);

  await provider.request({
    method: "hardhat_mine",
    params: [blocksHex, intervalHex],
  });
}
