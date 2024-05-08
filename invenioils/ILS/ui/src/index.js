import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import {
  history,
  InvenioILSApp,
  IEFallback,
} from '@inveniosoftware/react-invenio-app-ils';
import React from 'react';
import ReactDOM from 'react-dom';
import { OverridableContext } from 'react-overridable';
import { Router } from 'react-router-dom';
import 'semantic-ui-less/semantic.less';
import { config } from './config';

// Checks if browser is IE (unsupported)
const isIE = !!document.documentMode;
const overriddenCmps = {};

if (!isIE) {
  ReactDOM.render(
    <Router history={history}>
      <OverridableContext.Provider value={overriddenCmps}>
        <InvenioILSApp config={config} />
      </OverridableContext.Provider>
    </Router>,
    document.getElementById('app')
  );
} else {
  IEFallback();
}
