import { Request, Response } from 'express'
import { lineService } from '../../services/lineService'

/**
 * delete a line
 */

export async function deleteLine(req: Request<{ lineId: string }>, res: Response) {
  try {
    const success = lineService.deleteLine(req.params.lineId)
    if (success) {
      res.status(200).send({ message: `Line ${req.params.lineId} deleted successfully` })
    } else {
      res.status(404).send({ error: 'Line not found' })
    }
  } catch (error) {
    console.error('Error deleting line:', error)
    res.status(500).send({ error: 'Failed to delete line' })
  }
}
