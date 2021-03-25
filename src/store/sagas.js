import { findAllByAltText } from "@testing-library/react";
import { fetchResultWatcher } from "./results/saga";

import {all} from 'redux-saga/effects'
import  { fetchResultWatcher } from './results/saga'


export default function* root() {
    yield all([
        fetchResultWatcher()
    ])
}