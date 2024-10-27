import { Router } from 'express'
import { getLine } from './get-line'
import { addLine } from './add-line'
import { deleteLine } from './delete-line'
import { updateLine } from './update-line'
import { getFilteredStops } from './filter-stops'

export const transitLinesRouter = Router()

transitLinesRouter.get('/:lineId', getLine)
transitLinesRouter.post('/:lineId', addLine)
transitLinesRouter.delete('/:lineId', deleteLine)
transitLinesRouter.put('/:lineId', updateLine)
transitLinesRouter.get('/stops', getFilteredStops)

// TODO add CRUD methods
