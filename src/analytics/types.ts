export type TotemStep =
  | 'service'
  | 'profile'
  | 'send'
  | 'payment'
  | 'qr_code'

export type TotemAction =
  | 'enter'
  | 'exit'
  | 'submit'
  | 'select'
  | 'view'

export type TotemStatus = 'success' | 'error'
