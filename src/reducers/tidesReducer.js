/** Import actions */
import {
  SAVE_DAILY_TIDES,
} from 'src/actions/tides';
import {
  STOP_LOADING,
} from 'src/actions/settings';

const initialState = {
  dateUTC: '2021-03-01T15:18:20+00:00',
  dailyTides: [
    {
      timestamp: 1614619887,
      datetime: '2021-03-01T17:31:27+00:00',
      height: -3.911612709011727,
      state: 'LOW TIDE',
    },
    {
      timestamp: 1614638489,
      datetime: '2021-03-01T22:41:29+00:00',
      height: 3.0568557665062115,
      state: 'HIGH TIDE',
    },
    {
      timestamp: 1614664138,
      datetime: '2021-03-02T05:48:58+00:00',
      height: -3.6167463806673688,
      state: 'LOW TIDE',
    },
    {
      timestamp: 1614682420,
      datetime: '2021-03-02T10:53:40+00:00',
      height: 3.1861226237966216,
      state: 'HIGH TIDE',
    },
  ],
  firstNextTideState: {
    datetime: '2021-03-01T17:31:27+00:00',
    state: 'LOW TIDE',
  },
  secondNextTideState: {
    datetime: '2021-03-01T22:41:29+00:00',
    state: 'HIGH TIDE',
  },
  allTides: [
    {
      timestamp: 1614611900, datetime: '2021-03-01T15:18:20+00:00', height: -1.8678225473369956, state: 'FALLING',
    },
    {
      timestamp: 1614615500, datetime: '2021-03-01T16:18:20+00:00', height: -3.2515519916007563, state: 'FALLING',
    },
    {
      timestamp: 1614619100, datetime: '2021-03-01T17:18:20+00:00', height: -3.8877812202983963, state: 'FALLING',
    },
    {
      timestamp: 1614622700, datetime: '2021-03-01T18:18:20+00:00', height: -3.5683804099156853, state: 'RISING',
    },
    {
      timestamp: 1614626300, datetime: '2021-03-01T19:18:20+00:00', height: -2.0441737613040805, state: 'RISING',
    },
    {
      timestamp: 1614629900, datetime: '2021-03-01T20:18:20+00:00', height: 0.25227609044009425, state: 'RISING',
    },
    {
      timestamp: 1614633500, datetime: '2021-03-01T21:18:20+00:00', height: 2.1886444288626996, state: 'RISING',
    },
    {
      timestamp: 1614637100, datetime: '2021-03-01T22:18:20+00:00', height: 3.006692048306863, state: 'RISING',
    },
    {
      timestamp: 1614640700, datetime: '2021-03-01T23:18:20+00:00', height: 2.9779830942257597, state: 'FALLING',
    },
    {
      timestamp: 1614644300, datetime: '2021-03-02T00:18:20+00:00', height: 2.699258537495956, state: 'FALLING',
    },
    {
      timestamp: 1614647900, datetime: '2021-03-02T01:18:20+00:00', height: 2.103913856716308, state: 'FALLING',
    },
    {
      timestamp: 1614651500, datetime: '2021-03-02T02:18:20+00:00', height: 0.7644621024944093, state: 'FALLING',
    },
    {
      timestamp: 1614655100, datetime: '2021-03-02T03:18:20+00:00', height: -1.082473535724982, state: 'FALLING',
    },
    {
      timestamp: 1614658700, datetime: '2021-03-02T04:18:20+00:00', height: -2.650850718997424, state: 'FALLING',
    },
    {
      timestamp: 1614662300, datetime: '2021-03-02T05:18:20+00:00', height: -3.4984613797436004, state: 'FALLING',
    },
    {
      timestamp: 1614665900, datetime: '2021-03-02T06:18:20+00:00', height: -3.495033083521718, state: 'RISING',
    },
    {
      timestamp: 1614669500, datetime: '2021-03-02T07:18:20+00:00', height: -2.392756492515546, state: 'RISING',
    },
    {
      timestamp: 1614673100, datetime: '2021-03-02T08:18:20+00:00', height: -0.2996319875391441, state: 'RISING',
    },
    {
      timestamp: 1614676700, datetime: '2021-03-02T09:18:20+00:00', height: 1.8512817395627337, state: 'RISING',
    },
    {
      timestamp: 1614680300, datetime: '2021-03-02T10:18:20+00:00', height: 3.0317871880882876, state: 'RISING',
    },
    {
      timestamp: 1614683900, datetime: '2021-03-02T11:18:20+00:00', height: 3.133685139262435, state: 'RISING',
    },
    {
      timestamp: 1614687500, datetime: '2021-03-02T12:18:20+00:00', height: 2.791719086416121, state: 'FALLING',
    },
    {
      timestamp: 1614691100, datetime: '2021-03-02T13:18:20+00:00', height: 2.2782177932123626, state: 'FALLING',
    },
    {
      timestamp: 1614694700, datetime: '2021-03-02T14:18:20+00:00', height: 1.1863840262246108, state: 'FALLING',
    },
  ],
  originTidesData: {
    latitude: 49.375,
    longitude: -0.8125,
    distance: 4.3,
    unit: 'km',
  },
  loadingTides: true,
};

function tidesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_DAILY_TIDES:
      return {
        ...state,
        dailyTides: action.tidesOfTheDay,
        loadingTides: false,
      };
    case STOP_LOADING:
      return {
        ...state,
        loadingTides: false,
      };
    default:
      return state;
  }
}

export default tidesReducer;
