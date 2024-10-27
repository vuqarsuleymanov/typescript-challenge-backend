import { Request, Response } from 'express'
import { lineService } from '../../services/lineService'

/**
 * update a line
 */

export async function updateLine(req: Request<{ lineId: string }>, res: Response) {
  const { lineId } = req.params
  const { stops } = req.body
  if (!stops || !Array.isArray(stops) || stops.length === 0) {
    return res.status(400).send({ error: 'Invalid stops data' })
  }
  try {
    const success = lineService.updateLine(lineId, stops)
    if (success) {
      res.status(200).send({ message: `Line ${lineId} updated successfully`, lineId, stops })
    } else {
      res.status(404).send({ error: 'Line not found' })
    }
  } catch (error) {
    console.error('Error updating line:', error)
    res.status(500).send({ error: 'Failed to update line' })
  }
}
