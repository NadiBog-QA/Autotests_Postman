pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("temperate");
});