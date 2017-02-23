import "zone.js";
import { Expect, SpyOn, Test, TestCase, TestFixture } from "alsatian";
import { TestBed } from "@angular/core/testing";
import * as PlatformBrowserDynamicTesting from "@angular/platform-browser-dynamic/testing";
import * as JsDom from "jsdom";

@TestFixture("shim tests")
export class ShimTests {

    @Test("shim setup is successful")
    public shimSetupIsSuccessful() {
        const HTMLElement = {};
        const XMLHttpRequest = {};
        const Node = {};

        const window = {
            HTMLElement: HTMLElement,
            XMLHttpRequest: XMLHttpRequest,
            Node: Node
        };

        const document = { defaultView: window };
        
        const platformBrowserDynamicTesting = { };

        SpyOn(TestBed, "initTestEnvironment");
        SpyOn(JsDom, "jsdom").andReturn(document);
        SpyOn(PlatformBrowserDynamicTesting, "platformBrowserDynamicTesting").andReturn(platformBrowserDynamicTesting);

        require("../../");

        Expect(JsDom.jsdom).toHaveBeenCalledWith("<!doctype html><html><body></body></html>");
        Expect((global as any).document).toBe(document);
        Expect((global as any).HTMLElement).toBe(HTMLElement);
        Expect((global as any).XMLHttpRequest).toBe(XMLHttpRequest);
        Expect((global as any).Node).toBe(Node);
        Expect(TestBed.initTestEnvironment).toHaveBeenCalledWith(PlatformBrowserDynamicTesting.BrowserDynamicTestingModule, platformBrowserDynamicTesting );
    }
}