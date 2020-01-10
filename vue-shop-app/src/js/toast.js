import { Toast } from 'vant'
import 'vant/lib/index.css'

export function toast(message, duration = 1000) {
    Toast({
        message, duration
    });
  }
