import { LINES } from 'src/constants/lines'
import { TransitLine, TransitStop } from 'src/types/line'

export class LineService {
  private lines: { [lineId: string]: TransitLine }

  constructor() {
    this.lines = LINES // populate initial lines
  }

  /**
   * Check wehter a line exists
   * @param lineId Id of the line to be checked
   */
  hasLine(lineId: string): boolean {
    return !!this.lines[lineId]
  }

  /**
   * Get a line by it's id
   * @param lineId Id of the line
   */
  getLine(lineId: string): TransitLine {
    return this.lines[lineId]
  }

  /**
   * Add a new line
   * @param newLineId New id of the line. Cannot be an id that already exists
   * @param stops Array of stops for the new line. Note: A line needs a minimum of two stops.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addLine(newLineId: string, stops: TransitStop[]): void {
    if (!newLineId || !stops || stops.length === 0) {
      throw new Error('Line ID and stops are required')
    }
    LINES[newLineId] = {
      id: newLineId,
      stops: stops.map((stop, index) => {
        const prevId = index > 0 ? stops[index - 1].id : null
        const nextId = index < stops.length - 1 ? stops[index + 1].id : null
        return { ...stop, prevId, nextId }
      }),
    }
  }

  updateLine(lineId: string, stops: TransitStop[]): boolean {
    if (!this.hasLine(lineId)) {
      return false
    }
    LINES[lineId].stops = stops.map((stop, index) => {
      const prevId = index > 0 ? stops[index - 1].id : null
      const nextId = index < stops.length - 1 ? stops[index + 1].id : null
      return { ...stop, prevId, nextId }
    })
    return true
  }

  deleteLine(lineId: string): boolean {
    if (this.hasLine(lineId)) {
      delete LINES[lineId]
      return true
    }
    return false
  }

  /**
   * Add a stop to a line
   * @param lineId Id of the line
   * @param stop the stop you want to add
   * @param reference id of a reference stop
   * @param position defines if the new stop is added before or after the existing stop
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addStop(lineId: string, stop: TransitStop, reference: string, position: 'before' | 'after' = 'after'): void {
    // TODO
  }
}

export const lineService = new LineService()
