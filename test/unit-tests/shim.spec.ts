import "zone.js";
import { Expect, SpyOn, Test, TestFixture } from "alsatian";
import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

@TestFixture("shim tests")
export class ShimTests {

    @Test("initTestEnvironment called with correct values")
    public initTestEnvironmentCalled() {
        SpyOn(TestBed, "initTestEnvironment");

        require("../../");

        Expect(TestBed.initTestEnvironment).toHaveBeenCalled();
    }
}