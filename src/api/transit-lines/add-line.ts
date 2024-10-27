import { Request, Response } from 'express'
import { lineService } from '../../services/lineService'

/**
 * add a line
 */

export async function addLine(req: Request<{ lineId: string }>, res: Response) {
  const { lineId } = req.params
  const { stops } = req.body
  if (!lineId || !stops || !Array.isArray(stops) || stops.length === 0) {
    return res.status(400).send({ error: 'Invalid line data' })
  }
  try {
    lineService.addLine(lineId, stops)
    res.status(201).send({ message: 'Line added successfully', lineId, stops })
  } catch (error) {
    console.error('Error adding line:', error)
    res.status(500).send({ error: 'Failed to add line' })
  }
}
