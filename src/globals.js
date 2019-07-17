import { debug } from './logger';

export const SpansContainer = (() => {
  const spans = [];

  const addSpan = span => {
    spans.push(span);
    debug('Span created', span);
  };
  const getSpans = () => spans;
  const clearSpans = () => (spans.length = 0);

  return { addSpan, getSpans, clearSpans };
})();

export const TracerGlobals = (() => {
  const handlerInputs = { event: {}, context: {} };
  const tracerInputs = {
    token: '',
    debug: false,
    edgeHost: '',
    switchOff: false,
  };

  const setHandlerInputs = ({ event, context }) =>
    Object.assign(handlerInputs, { event, context });

  const getHandlerInputs = () => handlerInputs;

  const clearHandlerInputs = () =>
    Object.assign(handlerInputs, { event: {}, context: {} });

  const setTracerInputs = ({
    token = '',
    debug = false,
    edgeHost = '',
    switchOff = false,
  }) => Object.assign(tracerInputs, { token, debug, edgeHost, switchOff });

  const getTracerInputs = () => tracerInputs;

  const clearTracerInputs = () =>
    Object.assign(tracerInputs, {
      token: '',
      debug: false,
      edgeHost: '',
      switchOff: false,
    });

  return {
    getTracerInputs,
    setTracerInputs,
    setHandlerInputs,
    getHandlerInputs,
    clearTracerInputs,
    clearHandlerInputs,
  };
})();

export const clearGlobals = () => {
  SpansContainer.clearSpans();
  TracerGlobals.clearTracerInputs();
  TracerGlobals.clearHandlerInputs();
};
