import { Request, Response } from 'express'
import { lineService } from '../../services/lineService'

export async function getFilteredStops(req: Request, res: Response) {
  const { peopleOn, peopleOff, reachablePopulationWalk, reachablePopulationBike } = req.query

  // Construct the filter object based on query parameters
  const filter = {
    ...(peopleOn && { peopleOn: parseInt(peopleOn as string) }),
    ...(peopleOff && { peopleOff: parseInt(peopleOff as string) }),
    ...(reachablePopulationWalk && { reachablePopulationWalk: parseInt(reachablePopulationWalk as string) }),
    ...(reachablePopulationBike && { reachablePopulationBike: parseInt(reachablePopulationBike as string) }),
  }

  try {
    const matchingStops = lineService.filterStops(filter)
    res.status(200).send(matchingStops)
  } catch (error) {
    console.error('Error retrieving filtered stops:', error)
    res.status(500).send({ error: 'Failed to retrieve stops' })
  }
}
