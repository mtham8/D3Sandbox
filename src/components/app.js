import { linearScale } from './linear-scale'
import { timeScale } from './time-scale'
import { quantizeScale } from './quantize-scale'
import { ordinalScale } from './ordinal-scale'
import { dataJSON } from './load-data'
import './modify-dom'
import './start-visual'
import './output-svg'
import './better-org'
import './margin-convention'
import './chart-axes'
import './responsive-view'
import './column-chart'
import './scatter-plot'
import './line-chart'
import './area-chart'
import './debug-d3'
import './animate-transition'
import { go, goNow } from './reuse-transition'
import { render } from './animate-pattern'

$('.go').click( cb => go())
$('.goNow').click( cb => goNow())

$('.math').click(cb => render('math'))
$('.science').click(cb => render('science'))
$('.lang').click(cb => render('language'))
