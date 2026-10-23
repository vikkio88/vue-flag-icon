import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Flag from "../components/icon/Flag.vue";

describe("Flag component", () => {
  it("renders the flag icon class for an iso code", () => {
    const wrapper = mount(Flag, { props: { iso: "it" } });
    expect(wrapper.classes()).toContain("fi");
    expect(wrapper.classes().join(" ")).toContain("fi-it");
  });

  it("adds squared class by default", () => {
    const wrapper = mount(Flag, { props: { iso: "gb" } });
    expect(wrapper.classes().join(" ")).toContain("fis");
  });

  it("omits squared class when squared is false", () => {
    const wrapper = mount(Flag, { props: { iso: "us", squared: false } });
    expect(wrapper.classes().join(" ")).not.toContain("fis");
  });

  it("uses title prop when provided", () => {
    const wrapper = mount(Flag, { props: { iso: "it", title: "Italy" } });
    expect(wrapper.attributes("title")).toBe("Italy");
  });

  it("defaults title to iso", () => {
    const wrapper = mount(Flag, { props: { iso: "it" } });
    expect(wrapper.attributes("title")).toBe("it");
  });

  it("does not render when iso is null", () => {
    const wrapper = mount(Flag, { props: { iso: null } });
    expect(wrapper.html()).toBe("<!--v-if-->");
  });
});
