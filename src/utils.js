import moment from 'moment';
import 'moment-duration-format';

const KM_TO_MILE_RATIO = 0.621371192;

export const kmToMile = km => km * KM_TO_MILE_RATIO

export const formatTime = (seconds, format) => {
  return moment.duration(seconds, 'seconds').format(format, 0, { trim: false })
}

export const formatSpeed = (kph, decimals = 0, imperial) => {
  const speed = imperial ? kmToMile(kph) : kph;
  const unit = imperial ? 'mi/h' : 'km/h'
  return `${speed.toFixed(decimals)} ${unit}`
}

export const formatDistance = (km, decimals, imperial) => {
  const distance = imperial ? kmToMile(km) : km;
  const unit = imperial ? 'mi' : 'km'
  return `${distance.toFixed(decimals)} ${unit}`;
}

export const formatPace = (mkm, format, imperial) => {
  const pace = imperial ? mkm * 1 / KM_TO_MILE_RATIO : mkm;
  const unit = imperial ? 'min/mi' : 'min/km';
  return `${formatTime(pace * 60, format)} ${unit}`;
}