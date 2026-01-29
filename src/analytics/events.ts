import { trackTotemEvent } from './ga'
import type { TotemStep, TotemStatus } from './types'

export function trackStepEnter(flow: string, step: TotemStep) {
  trackTotemEvent({
    flow,
    step,
    action: 'enter',
  })
}

export function trackStepExit(
  flow: string,
  step: TotemStep,
  durationMs: number
) {
  trackTotemEvent({
    flow,
    step,
    action: 'exit',
    duration_ms: durationMs,
  })
}

export function trackSubmit(
  flow: string,
  step: TotemStep,
  status: TotemStatus,
  errorCode?: string
) {
  trackTotemEvent({
    flow,
    step,
    action: 'submit',
    status,
    error_code: errorCode,
  })
}

export function trackSelect(
  flow: string,
  step: TotemStep,
  method: string
) {
  trackTotemEvent({
    flow,
    step,
    action: 'select',
    method,
  })
}

export function trackView(flow: string, step: TotemStep) {
  trackTotemEvent({
    flow,
    step,
    action: 'view',
  })
}
