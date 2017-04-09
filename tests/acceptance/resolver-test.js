/* globals require */
import moduleForAcceptance from 'dummy/tests/helpers/module-for-acceptance';
import  HotReplacementComponent from 'ember-cli-hot-loader/components/hot-replacement-component';
import { test } from 'qunit';

moduleForAcceptance('Acceptance | Utility | clear container cache');

const _helpers = {
	resolveTemplate (name) {
		return this.resolve('template', name);
	},
	resolveComponent (name) {
		return this.resolve('component', name);
	},
	resolve (type, name) {
		return this.application.__container__.lookup(`${type}:${name}`);
	}
};

function resolverTest (name, actualTest) {
	test(name, function (assert) {
		Object.assign(this, _helpers); // TODO: fix this for phantom
		visit('/');
		return andThen(() => {
		  return actualTest.call(this, assert);
		});
	});
}

// Replace this with your real tests.
resolverTest('it can resolve partials', function(assert) {
  assert.ok(this.application.__container__.lookup('template:-mypartial'));
});

// // Scenario: wrap components
resolverTest('HotReplacementComponent: template-only-pod is wrapped in HotReplacementComponent', function(assert) {
	assert.ok(
		this.resolveComponent('template-only-pod') instanceof HotReplacementComponent);
});

resolverTest('HotReplacementComponent: mixed-classic is wrapped in HotReplacementComponent', function (assert) {
	assert.ok(
		this.resolveComponent('mixed-classic') instanceof HotReplacementComponent);
});

resolverTest('HotReplacementComponent: mixed-pod is wrapped in HotReplacementComponent', function (assert) {
	assert.ok(
		this.resolveComponent('mixed-pod') instanceof HotReplacementComponent);
});

resolverTest('HotReplacementComponent: inline-template-classic is wrapped in HotReplacementComponent', function (assert) {
	assert.ok(
		this.resolveComponent('inline-template-classic') instanceof HotReplacementComponent);
});

resolverTest('HotReplacementComponent: inline-template-pod is wrapped in HotReplacementComponent', function (assert) {
	assert.ok(
		this.resolveComponent('inline-template-pod') instanceof HotReplacementComponent);
});

resolverTest('HotReplacementComponent: js-only-classic is wrapped in HotReplacementComponent', function (assert) {
	assert.ok(
		this.resolveComponent('js-only-classic') instanceof HotReplacementComponent);
});

resolverTest('HotReplacementComponent: js-only-pod is wrapped in HotReplacementComponent', function (assert) {
	assert.ok(
		this.resolveComponent('js-only-pod') instanceof HotReplacementComponent);
});

resolverTest('HotReplacementComponent: template-only-classic is wrapped in HotReplacementComponent', function (assert) {
	assert.ok(
		this.resolveComponent('template-only-classic') instanceof HotReplacementComponent);
});

resolverTest('HotReplacementComponent: template-only-pod is wrapped in HotReplacementComponent', function (assert) {
	assert.ok(
		this.resolveComponent('template-only-pod') instanceof HotReplacementComponent);
});

resolverTest('HotReplacementComponent: component-with-positionalparam-as-string is wrapped in HotReplacementComponent', function (assert) {
	assert.ok(
		this.resolveComponent('component-with-positionalparam-as-string') instanceof HotReplacementComponent);
});

// Scenario: original resolutions
resolverTest('Original resolution: mixed-classic-original inherits from mixed-classic', function (assert) {
	assert.ok(
		this.resolveComponent('mixed-classic-original') instanceof require('dummy/components/mixed-classic').default);
});

resolverTest('Original resolution: mixed-pod-original inherits from mixed-pod', function (assert) {
	assert.ok(
		this.resolveComponent('mixed-pod-original') instanceof require('dummy/components/mixed-pod/component').default);
});

resolverTest('Original resolution: inline-template-classic-original inherits from inline-template-classic', function (assert) {
	assert.ok(
		this.resolveComponent('inline-template-classic-original') instanceof require('dummy/components/inline-template-classic').default);
});

resolverTest('Original resolution: inline-template-pod-original inherits from inline-template-pod', function (assert) {
	assert.ok(
		this.resolveComponent('inline-template-pod-original') instanceof require('dummy/components/inline-template-pod/component').default);
});

resolverTest('Original resolution: js-only-classic-original inherits from js-only-classic', function (assert) {
	assert.ok(
		this.resolveComponent('js-only-classic-original') instanceof require('dummy/components/js-only-classic').default);
});

resolverTest('Original resolution: js-only-pod-original inherits from js-only-pod', function (assert) {
	assert.ok(
		this.resolveComponent('js-only-pod-original') instanceof require('dummy/components/js-only-pod/component').default);
});

resolverTest('Original resolution: template-only-classic-original is undefined since we don\'t have a component', function (assert) {
	assert.ok(
		this.resolveComponent('template-only-classic-original') === undefined);
});

resolverTest('Original resolution: template-only-pod-original is undefined since we don\'t have a component', function (assert) {
	assert.ok(
		this.resolveComponent('template-only-pod-original') === undefined);
});

resolverTest('Original resolution: component-with-positionalparam-as-string-original inherits from component-with-positionalparam-as-string', function (assert) {
	assert.ok(
		this.resolveComponent('component-with-positionalparam-as-string-original') instanceof require('dummy/components/component-with-positionalparam-as-string').default);
});

// Scenario: template resolution
resolverTest('Template resolution: ....', function (assert) {
	assert.ok(this.resolveTemplate('components/mixed-classic') === undefined);
	assert.ok(this.resolveTemplate('components/mixed-pod') === undefined);
	assert.ok(this.resolveTemplate('components/inline-template-classic') === undefined);
	assert.ok(this.resolveTemplate('components/inline-template-pod') === undefined);
	assert.ok(this.resolveTemplate('components/js-only-classic') === undefined);
	assert.ok(this.resolveTemplate('components/js-only-pod') === undefined);
	assert.ok(this.resolveTemplate('components/template-only-classic') === undefined);
	assert.ok(this.resolveTemplate('components/template-only-pod') === undefined);
	assert.ok(this.resolveTemplate('components/component-with-positionalparam-as-string') === undefined);

	assert.ok(this.resolveTemplate('components/mixed-classic-original') !== undefined);
	assert.ok(this.resolveTemplate('components/mixed-pod-original') !== undefined);
	assert.ok(this.resolveTemplate('components/inline-template-classic-original') === undefined);
	assert.ok(this.resolveTemplate('components/inline-template-pod-original') === undefined);
	assert.ok(this.resolveTemplate('components/js-only-classic-original') === undefined);
	assert.ok(this.resolveTemplate('components/js-only-pod-original') === undefined);
	assert.ok(this.resolveTemplate('components/template-only-classic-original') !== undefined);
	assert.ok(this.resolveTemplate('components/template-only-pod-original') !== undefined);
	assert.ok(this.resolveTemplate('components/component-with-positionalparam-as-string-original') === undefined);
});





