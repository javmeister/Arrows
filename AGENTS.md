<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- You have access to the Nx MCP server and its tools, use them to help the user
- When answering questions about the repository, use the `nx_workspace` tool first to gain an understanding of the workspace architecture where applicable.
- When working in individual projects, use the `nx_project_details` mcp tool to analyze and understand the specific project structure and dependencies
- For questions around nx configuration, best practices or if you're unsure, use the `nx_docs` tool to get relevant, up-to-date docs. Always use this instead of assuming things about nx configuration
- If the user needs help with an Nx configuration or project graph error, use the `nx_workspace` tool to get any errors
- For Nx plugin best practices, check `node_modules/@nx/<plugin>/PLUGIN.md`. Not all plugins have this file - proceed without it if unavailable.

<!-- nx configuration end-->

<!-- angular best practices start-->

# Angular Best Practices

## TypeScript

- Use strict type checking.
- Prefer type inference when the type is obvious.
- Avoid `any`; use `unknown` when type is uncertain.

## Angular

- Use standalone components (default in v20+). Do NOT set `standalone: true`.
- Use signals for state management.
- Implement lazy loading for feature routes.
- Do NOT use `@HostBinding` or `@HostListener`. Use `host` in the decorator instead.
- Use `NgOptimizedImage` for all static images. It does not work for inline base64 images.

## Components

- Keep components small and focused on a single responsibility.
- Use `input()` and `output()` functions instead of decorators.
- Use `computed()` for derived state.
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in the decorator.
- Prefer inline templates for small components.
- Prefer reactive forms over template-driven forms.
- Do NOT use `ngClass`; use `class` bindings instead.
- Do NOT use `ngStyle`; use `style` bindings instead.
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state.
- Use `computed()` for derived state.
- Keep state transformations pure and predictable.
- Do NOT use `mutate` on signals; use `update` or `set` instead.

## Templates

- Keep templates simple and avoid complex logic.
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`.
- Use the async pipe to handle observables.
- Do not assume globals like `new Date()` are available.
- Do not write arrow functions in templates (not supported).

## Services

- Design services around a single responsibility.
- Use `providedIn: 'root'` for singleton services.
- Use `inject()` instead of constructor injection.

## Accessibility

- Must pass AXE checks.
- Must follow WCAG AA minimums (focus management, color contrast, ARIA).

<!-- angular best practices end-->
