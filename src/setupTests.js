import fetchMock from "jest-fetch-mock";
import "@testing-library/jest-dom/extend-expect";

global.fetch = fetchMock;
