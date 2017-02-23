import "zone.js";
import { jsdom } from "jsdom";
import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

const document = jsdom("<!doctype html><html><body></body></html>");

const window = document.parentWindow;

(global as any).document = document;
(global as any).HTMLElement = (window as any).HTMLElement;
(global as any).XMLHttpRequest = (window as any).XMLHttpRequest;

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
