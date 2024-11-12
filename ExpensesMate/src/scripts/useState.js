export function useState(initialValue) {
  let state = initialValue; // Inicializa el estado

  const setState = (newValue) => {
    state = newValue; // Actualiza el estado
    return state;
  };

  const getState = () => {
    return state; // Devuelve el estado actual
  };

  return [getState, setState]; // Retorna las funciones, no los valores directos
}
