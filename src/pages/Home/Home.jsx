import {
  Button,
  Card,
  Badge,
  Input,
  Textarea,
  SectionHeading,
  Container,
  Section,
} from '@components/ui';

/**
 * Home Page
 *
 * Temporarily serves as a design system showcase to verify
 * all components render correctly. This will be replaced
 * with the actual homepage in a future milestone.
 */
function Home() {
  return (
    <div>
      {/* ======== HERO-LIKE HEADER ======== */}
      <Section bg="primary" spacing="lg">
        <Container>
          <div className="text-center">
            <p className="text-accent-400 text-sm font-semibold uppercase tracking-[0.15em] mb-4">
              Design System
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Vasant Valley School
            </h1>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              A scalable design foundation built for a premium international school experience.
              Every component below is reusable across the entire project.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="accent" size="lg">Explore Admissions</Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ======== BUTTONS ======== */}
      <Section>
        <Container>
          <SectionHeading
            label="Components"
            title="Buttons"
            subtitle="Available in five variants and three sizes with loading and icon support."
          />

          {/* Variants */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-4">Variants</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="accent">Accent</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <p className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-4">Sizes</p>
              <div className="flex flex-wrap items-end gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* States */}
            <div>
              <p className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-4">States</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
                <Button fullWidth>Full Width Button</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ======== BADGES ======== */}
      <Section bg="muted">
        <Container>
          <SectionHeading
            label="Components"
            title="Badges"
            subtitle="Compact labels for statuses, tags, and categories."
          />

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="primary" size="sm">Small Badge</Badge>
          </div>
        </Container>
      </Section>

      {/* ======== CARDS ======== */}
      <Section>
        <Container>
          <SectionHeading
            label="Components"
            title="Cards"
            subtitle="Content cards with four style variants and compound sub-components."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="default">
              <Badge variant="primary" className="mb-3">Featured</Badge>
              <Card.Title>Default Card</Card.Title>
              <Card.Description>
                Clean bordered card with subtle shadow. Ideal for content lists and feature grids.
              </Card.Description>
            </Card>

            <Card variant="elevated">
              <Badge variant="accent" className="mb-3">Popular</Badge>
              <Card.Title>Elevated Card</Card.Title>
              <Card.Description>
                Stronger shadow for emphasis. Use for highlighted content or featured items.
              </Card.Description>
            </Card>

            <Card variant="outline">
              <Badge variant="secondary" className="mb-3">New</Badge>
              <Card.Title>Outline Card</Card.Title>
              <Card.Description>
                Transparent with a border. Suitable for secondary content or dashboard panels.
              </Card.Description>
            </Card>

            <Card variant="glass">
              <Badge variant="default" className="mb-3">Premium</Badge>
              <Card.Title>Glass Card</Card.Title>
              <Card.Description>
                Frosted glass effect with backdrop blur. Perfect for overlaying images or gradients.
              </Card.Description>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ======== SECTION HEADINGS ======== */}
      <Section bg="muted">
        <Container>
          <SectionHeading
            label="Components"
            title="Section Headings"
            subtitle="Consistent heading blocks used at the top of every page section."
          />

          <div className="space-y-12 mt-8">
            <Card variant="default" hoverable={false}>
              <p className="text-xs font-medium text-surface-400 uppercase tracking-wider mb-4">Center Aligned</p>
              <SectionHeading
                label="Our School"
                title="Nurturing Excellence Since 1990"
                subtitle="A tradition of academic rigour, creative expression, and character development."
              />
            </Card>

            <Card variant="default" hoverable={false}>
              <p className="text-xs font-medium text-surface-400 uppercase tracking-wider mb-4">Left Aligned</p>
              <SectionHeading
                label="Academics"
                title="World-Class Curriculum"
                subtitle="Preparing students for global citizenship through inquiry-based learning."
                align="left"
              />
            </Card>
          </div>
        </Container>
      </Section>

      {/* ======== FORM ELEMENTS ======== */}
      <Section>
        <Container maxWidth="narrow">
          <SectionHeading
            label="Components"
            title="Form Elements"
            subtitle="Accessible inputs with labels, validation states, and helper text."
          />

          <Card variant="default" hoverable={false}>
            <div className="space-y-5">
              <Input
                id="demo-name"
                label="Full Name"
                placeholder="Enter your full name"
                helperText="As it appears on official documents."
              />

              <Input
                id="demo-email"
                label="Email Address"
                type="email"
                placeholder="parent@example.com"
              />

              <Input
                id="demo-error"
                label="Phone Number"
                placeholder="+91 98765 43210"
                error="Please enter a valid phone number."
              />

              <Textarea
                id="demo-message"
                label="Message"
                placeholder="Tell us about your inquiry..."
                helperText="Maximum 500 characters."
              />

              <div className="flex gap-3 pt-2">
                <Button variant="primary">Submit Inquiry</Button>
                <Button variant="ghost">Cancel</Button>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* ======== COLOR PALETTE ======== */}
      <Section bg="muted">
        <Container>
          <SectionHeading
            label="Foundation"
            title="Color Palette"
            subtitle="The full color system with primary, secondary, accent, surface, and semantic tokens."
          />

          <div className="space-y-8">
            {/* Primary */}
            <div>
              <p className="text-sm font-semibold text-surface-700 mb-3">Primary</p>
              <div className="grid grid-cols-5 md:grid-cols-11 gap-2">
                {[50,100,200,300,400,500,600,700,800,900,950].map((shade) => (
                  <div key={shade} className="text-center">
                    <div className={`h-12 rounded-lg bg-primary-${shade}`} />
                    <span className="text-xs text-surface-500 mt-1 block">{shade}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary */}
            <div>
              <p className="text-sm font-semibold text-surface-700 mb-3">Secondary</p>
              <div className="grid grid-cols-5 md:grid-cols-11 gap-2">
                {[50,100,200,300,400,500,600,700,800,900,950].map((shade) => (
                  <div key={shade} className="text-center">
                    <div className={`h-12 rounded-lg bg-secondary-${shade}`} />
                    <span className="text-xs text-surface-500 mt-1 block">{shade}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent */}
            <div>
              <p className="text-sm font-semibold text-surface-700 mb-3">Accent</p>
              <div className="grid grid-cols-5 md:grid-cols-11 gap-2">
                {[50,100,200,300,400,500,600,700,800,900,950].map((shade) => (
                  <div key={shade} className="text-center">
                    <div className={`h-12 rounded-lg bg-accent-${shade}`} />
                    <span className="text-xs text-surface-500 mt-1 block">{shade}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Surface */}
            <div>
              <p className="text-sm font-semibold text-surface-700 mb-3">Surface</p>
              <div className="grid grid-cols-5 md:grid-cols-11 gap-2">
                {[50,100,200,300,400,500,600,700,800,900,950].map((shade) => (
                  <div key={shade} className="text-center">
                    <div className={`h-12 rounded-lg border border-surface-200 bg-surface-${shade}`} />
                    <span className="text-xs text-surface-500 mt-1 block">{shade}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Semantic */}
            <div>
              <p className="text-sm font-semibold text-surface-700 mb-3">Semantic</p>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="h-12 rounded-lg bg-success-500" />
                  <span className="text-xs text-surface-500 mt-1 block">Success</span>
                </div>
                <div className="text-center">
                  <div className="h-12 rounded-lg bg-warning-500" />
                  <span className="text-xs text-surface-500 mt-1 block">Warning</span>
                </div>
                <div className="text-center">
                  <div className="h-12 rounded-lg bg-error-500" />
                  <span className="text-xs text-surface-500 mt-1 block">Error</span>
                </div>
                <div className="text-center">
                  <div className="h-12 rounded-lg bg-info-500" />
                  <span className="text-xs text-surface-500 mt-1 block">Info</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ======== TYPOGRAPHY ======== */}
      <Section>
        <Container>
          <SectionHeading
            label="Foundation"
            title="Typography"
            subtitle="Playfair Display for headings and Inter for body text — a classic serif + modern sans-serif pairing."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card variant="default" hoverable={false}>
              <p className="text-xs font-medium text-surface-400 uppercase tracking-wider mb-6">Heading Scale</p>
              <div className="space-y-4">
                <h1 className="text-5xl font-bold">Heading 1</h1>
                <h2 className="text-4xl font-bold">Heading 2</h2>
                <h3 className="text-3xl font-semibold">Heading 3</h3>
                <h4 className="text-2xl font-semibold">Heading 4</h4>
                <h5 className="text-xl font-medium">Heading 5</h5>
                <h6 className="text-lg font-medium">Heading 6</h6>
              </div>
            </Card>

            <Card variant="default" hoverable={false}>
              <p className="text-xs font-medium text-surface-400 uppercase tracking-wider mb-6">Body Scale</p>
              <div className="space-y-4">
                <p className="text-xs text-surface-600">text-xs — 0.75rem (12px) — Fine print and labels</p>
                <p className="text-sm text-surface-600">text-sm — 0.875rem (14px) — Secondary text and captions</p>
                <p className="text-base text-surface-700">text-base — 1rem (16px) — Default body text</p>
                <p className="text-lg text-surface-700">text-lg — 1.125rem (18px) — Lead paragraphs</p>
                <p className="text-xl text-surface-800">text-xl — 1.25rem (20px) — Emphasized content</p>
                <p className="text-2xl text-surface-800">text-2xl — 1.5rem (24px) — Sub-headings</p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ======== SPACING & CONTAINERS ======== */}
      <Section bg="muted">
        <Container>
          <SectionHeading
            label="Foundation"
            title="Layout & Spacing"
            subtitle="Three container widths and consistent section padding for uniform page structure."
          />

          <div className="space-y-6">
            {[
              { label: 'Narrow', width: 'narrow', px: '960px' },
              { label: 'Default', width: 'default', px: '1280px' },
              { label: 'Wide', width: 'wide', px: '1440px' },
            ].map(({ label, width, px }) => (
              <div key={width}>
                <Container maxWidth={width}>
                  <div className="bg-primary-100 border-2 border-dashed border-primary-300 rounded-lg px-4 py-3 text-center">
                    <span className="text-sm font-medium text-primary-700">
                      Container — {label} ({px})
                    </span>
                  </div>
                </Container>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ======== DARK MODE ON PRIMARY ======== */}
      <Section bg="primary" spacing="lg">
        <Container>
          <SectionHeading
            label="Dark Variant"
            title="Components on Dark Backgrounds"
            subtitle="All components adapt gracefully when placed on primary or dark backgrounds."
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <Card variant="glass" className="border-white/10">
              <Badge variant="accent" className="mb-3">Arts</Badge>
              <Card.Title className="!text-white">Creative Expression</Card.Title>
              <Card.Description className="!text-primary-200">
                Fostering artistic talent through visual arts, music, dance, and theatre programmes.
              </Card.Description>
            </Card>

            <Card variant="glass" className="border-white/10">
              <Badge variant="accent" className="mb-3">Sports</Badge>
              <Card.Title className="!text-white">Athletic Excellence</Card.Title>
              <Card.Description className="!text-primary-200">
                State-of-the-art facilities for cricket, swimming, basketball, and track events.
              </Card.Description>
            </Card>

            <Card variant="glass" className="border-white/10">
              <Badge variant="accent" className="mb-3">Technology</Badge>
              <Card.Title className="!text-white">Digital Literacy</Card.Title>
              <Card.Description className="!text-primary-200">
                Coding labs, robotics workshops, and AI-integrated learning pathways.
              </Card.Description>
            </Card>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Button variant="accent" size="lg">Apply Now</Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              Request Brochure
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default Home;
