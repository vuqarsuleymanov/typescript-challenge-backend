import { Router } from 'express'
import { getLine } from './get-line'
import { addLine } from './add-line'
import { deleteLine } from './delete-line'
import { updateLine } from './update-line'

export const transitLinesRouter = Router()

transitLinesRouter.get('/:lineId', getLine)
transitLinesRouter.post('/:lineId', addLine)
transitLinesRouter.delete('/:lineId', deleteLine)
transitLinesRouter.put('/:lineId', updateLine)

// TODO add CRUD methods
