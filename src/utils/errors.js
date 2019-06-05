import { ERRORS_STRINGS } from "../languages";

export function NoResultsException() {
  this.message = ERRORS_STRINGS.noResults;
}

export function RequestException() {
  this.message = ERRORS_STRINGS.connection;
}
