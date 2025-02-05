import { WebPlugin, registerPlugin } from "@capacitor/core";
export class StartNavigationPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: "StartNavigationPlugin",
            platforms: ["web"],
        });
    }
    async launchMapsApp(options) {
        const travelMode = options.travelMode || 'driving';
        let addressQuery = null;
        if (options.address) {
            if (options.address.street != null) {
                addressQuery !== null && addressQuery !== void 0 ? addressQuery : (addressQuery = "");
                addressQuery += options.address.street + ",";
            }
            if (options.address.city != null) {
                addressQuery !== null && addressQuery !== void 0 ? addressQuery : (addressQuery = "");
                addressQuery += options.address.city + ",";
            }
            if (options.address.state != null) {
                addressQuery !== null && addressQuery !== void 0 ? addressQuery : (addressQuery = "");
                addressQuery += options.address.state + ",";
            }
            if (options.address.postalCode != null) {
                addressQuery !== null && addressQuery !== void 0 ? addressQuery : (addressQuery = "");
                addressQuery += options.address.postalCode + ",";
            }
            if (options.address.country != null) {
                addressQuery !== null && addressQuery !== void 0 ? addressQuery : (addressQuery = "");
                addressQuery += options.address.country + ",";
            }
            // Remove last comma
            addressQuery = addressQuery === null || addressQuery === void 0 ? void 0 : addressQuery.slice(0, -1);
        }
        else {
            addressQuery = `${options.latitude},${options.longitude}`;
        }
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${addressQuery}&travelmode=${travelMode}`, "_blank");
    }
}
const StartNavigation = registerPlugin("StartNavigationPlugin", {
    web: () => import("./web").then((m) => new m.StartNavigationPluginWeb()),
});
export * from "./definitions";
export { StartNavigation };
//# sourceMappingURL=web.js.map