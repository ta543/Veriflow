--
-- PostgreSQL database dump
--

-- Dumped from database version 15.11
-- Dumped by pg_dump version 15.12 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: timescaledb; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS timescaledb WITH SCHEMA public;


--
-- Name: EXTENSION timescaledb; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION timescaledb IS 'Enables scalable inserts and complex queries for time-series data (Community Edition)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: business_financial_data; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.business_financial_data (
    id integer NOT NULL,
    series_reference character varying(50) NOT NULL,
    data_value numeric,
    suppressed boolean DEFAULT false,
    status character varying(10),
    units character varying(20),
    magnitude integer,
    subject character varying(50),
    group_name character varying(50),
    series_title_1 character varying(50),
    series_title_2 character varying(50),
    series_title_3 character varying(50),
    series_title_4 character varying(50),
    series_title_5 character varying(50),
    period date NOT NULL
);


ALTER TABLE public.business_financial_data OWNER TO admin;

--
-- Name: _hyper_2_233_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_233_chunk (
    CONSTRAINT constraint_233 CHECK (((period >= '2024-09-26'::date) AND (period < '2024-10-03'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_233_chunk OWNER TO admin;

--
-- Name: _hyper_2_234_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_234_chunk (
    CONSTRAINT constraint_234 CHECK (((period >= '2024-10-31'::date) AND (period < '2024-11-07'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_234_chunk OWNER TO admin;

--
-- Name: _hyper_2_235_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_235_chunk (
    CONSTRAINT constraint_235 CHECK (((period >= '2024-11-28'::date) AND (period < '2024-12-05'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_235_chunk OWNER TO admin;

--
-- Name: _hyper_2_236_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_236_chunk (
    CONSTRAINT constraint_236 CHECK (((period >= '2024-12-26'::date) AND (period < '2025-01-02'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_236_chunk OWNER TO admin;

--
-- Name: _hyper_2_237_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_237_chunk (
    CONSTRAINT constraint_237 CHECK (((period >= '2025-01-30'::date) AND (period < '2025-02-06'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_237_chunk OWNER TO admin;

--
-- Name: _hyper_2_238_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_238_chunk (
    CONSTRAINT constraint_238 CHECK (((period >= '2025-02-27'::date) AND (period < '2025-03-06'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_238_chunk OWNER TO admin;

--
-- Name: _hyper_2_239_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_239_chunk (
    CONSTRAINT constraint_239 CHECK (((period >= '2025-03-27'::date) AND (period < '2025-04-03'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_239_chunk OWNER TO admin;

--
-- Name: _hyper_2_240_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_240_chunk (
    CONSTRAINT constraint_240 CHECK (((period >= '2025-05-01'::date) AND (period < '2025-05-08'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_240_chunk OWNER TO admin;

--
-- Name: _hyper_2_241_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_241_chunk (
    CONSTRAINT constraint_241 CHECK (((period >= '2025-05-29'::date) AND (period < '2025-06-05'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_241_chunk OWNER TO admin;

--
-- Name: _hyper_2_242_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_242_chunk (
    CONSTRAINT constraint_242 CHECK (((period >= '2025-06-26'::date) AND (period < '2025-07-03'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_242_chunk OWNER TO admin;

--
-- Name: _hyper_2_243_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_243_chunk (
    CONSTRAINT constraint_243 CHECK (((period >= '2025-07-31'::date) AND (period < '2025-08-07'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_243_chunk OWNER TO admin;

--
-- Name: _hyper_2_244_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_244_chunk (
    CONSTRAINT constraint_244 CHECK (((period >= '2025-08-28'::date) AND (period < '2025-09-04'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_244_chunk OWNER TO admin;

--
-- Name: _hyper_2_245_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_245_chunk (
    CONSTRAINT constraint_245 CHECK (((period >= '2025-09-25'::date) AND (period < '2025-10-02'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_245_chunk OWNER TO admin;

--
-- Name: _hyper_2_246_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_246_chunk (
    CONSTRAINT constraint_246 CHECK (((period >= '2025-10-30'::date) AND (period < '2025-11-06'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_246_chunk OWNER TO admin;

--
-- Name: _hyper_2_247_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_247_chunk (
    CONSTRAINT constraint_247 CHECK (((period >= '2025-11-27'::date) AND (period < '2025-12-04'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_247_chunk OWNER TO admin;

--
-- Name: _hyper_2_248_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_248_chunk (
    CONSTRAINT constraint_248 CHECK (((period >= '2023-12-28'::date) AND (period < '2024-01-04'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_248_chunk OWNER TO admin;

--
-- Name: _hyper_2_249_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_249_chunk (
    CONSTRAINT constraint_249 CHECK (((period >= '2024-02-01'::date) AND (period < '2024-02-08'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_249_chunk OWNER TO admin;

--
-- Name: _hyper_2_250_chunk; Type: TABLE; Schema: _timescaledb_internal; Owner: admin
--

CREATE TABLE _timescaledb_internal._hyper_2_250_chunk (
    CONSTRAINT constraint_250 CHECK (((period >= '2024-02-29'::date) AND (period < '2024-03-07'::date)))
)
INHERITS (public.business_financial_data);


ALTER TABLE _timescaledb_internal._hyper_2_250_chunk OWNER TO admin;

--
-- Name: business_financial_data_backup; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.business_financial_data_backup (
    id integer,
    series_reference character varying(50),
    period character varying(10),
    data_value numeric,
    suppressed boolean,
    status character varying(10),
    units character varying(20),
    magnitude integer,
    subject character varying(50),
    group_name character varying(50),
    series_title_1 character varying(50),
    series_title_2 character varying(50),
    series_title_3 character varying(50),
    series_title_4 character varying(50),
    series_title_5 character varying(50)
);


ALTER TABLE public.business_financial_data_backup OWNER TO admin;

--
-- Name: business_financial_data_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.business_financial_data_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.business_financial_data_id_seq OWNER TO admin;

--
-- Name: business_financial_data_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.business_financial_data_id_seq OWNED BY public.business_financial_data.id;


--
-- Name: metrics; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.metrics (
    "time" timestamp with time zone NOT NULL,
    device_id text,
    temperature double precision,
    humidity double precision
);


ALTER TABLE public.metrics OWNER TO admin;

--
-- Name: reference_financial_data; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.reference_financial_data (
    series_reference character varying(50) NOT NULL,
    period character varying(10) NOT NULL,
    expected_value numeric
);


ALTER TABLE public.reference_financial_data OWNER TO admin;

--
-- Name: _hyper_2_233_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_233_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_233_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_233_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_234_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_234_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_234_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_234_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_235_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_235_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_235_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_235_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_236_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_236_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_236_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_236_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_237_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_237_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_237_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_237_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_238_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_238_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_238_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_238_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_239_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_239_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_239_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_239_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_240_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_240_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_240_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_240_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_241_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_241_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_241_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_241_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_242_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_242_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_242_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_242_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_243_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_243_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_243_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_243_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_244_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_244_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_244_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_244_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_245_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_245_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_245_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_245_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_246_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_246_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_246_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_246_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_247_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_247_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_247_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_247_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_248_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_248_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_248_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_248_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_249_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_249_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_249_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_249_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: _hyper_2_250_chunk id; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_250_chunk ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Name: _hyper_2_250_chunk suppressed; Type: DEFAULT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_250_chunk ALTER COLUMN suppressed SET DEFAULT false;


--
-- Name: business_financial_data id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.business_financial_data ALTER COLUMN id SET DEFAULT nextval('public.business_financial_data_id_seq'::regclass);


--
-- Data for Name: hypertable; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.hypertable (id, schema_name, table_name, associated_schema_name, associated_table_prefix, num_dimensions, chunk_sizing_func_schema, chunk_sizing_func_name, chunk_target_size, compression_state, compressed_hypertable_id, status) FROM stdin;
1	public	metrics	_timescaledb_internal	_hyper_1	1	_timescaledb_functions	calculate_chunk_interval	0	0	\N	0
2	public	business_financial_data	_timescaledb_internal	_hyper_2	1	_timescaledb_functions	calculate_chunk_interval	0	0	\N	0
\.


--
-- Data for Name: chunk; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.chunk (id, hypertable_id, schema_name, table_name, compressed_chunk_id, dropped, status, osm_chunk, creation_time) FROM stdin;
248	2	_timescaledb_internal	_hyper_2_248_chunk	\N	f	0	f	2025-03-09 10:02:26.030564+00
249	2	_timescaledb_internal	_hyper_2_249_chunk	\N	f	0	f	2025-03-09 10:02:26.052205+00
250	2	_timescaledb_internal	_hyper_2_250_chunk	\N	f	0	f	2025-03-09 10:02:26.059235+00
233	2	_timescaledb_internal	_hyper_2_233_chunk	\N	f	0	f	2025-03-09 09:26:49.801142+00
234	2	_timescaledb_internal	_hyper_2_234_chunk	\N	f	0	f	2025-03-09 09:26:49.805423+00
235	2	_timescaledb_internal	_hyper_2_235_chunk	\N	f	0	f	2025-03-09 09:26:49.810006+00
236	2	_timescaledb_internal	_hyper_2_236_chunk	\N	f	0	f	2025-03-09 09:26:49.815538+00
237	2	_timescaledb_internal	_hyper_2_237_chunk	\N	f	0	f	2025-03-09 09:26:49.820182+00
238	2	_timescaledb_internal	_hyper_2_238_chunk	\N	f	0	f	2025-03-09 09:26:49.824989+00
239	2	_timescaledb_internal	_hyper_2_239_chunk	\N	f	0	f	2025-03-09 09:26:49.829266+00
240	2	_timescaledb_internal	_hyper_2_240_chunk	\N	f	0	f	2025-03-09 09:26:49.834704+00
241	2	_timescaledb_internal	_hyper_2_241_chunk	\N	f	0	f	2025-03-09 09:26:49.839417+00
242	2	_timescaledb_internal	_hyper_2_242_chunk	\N	f	0	f	2025-03-09 09:26:49.843629+00
243	2	_timescaledb_internal	_hyper_2_243_chunk	\N	f	0	f	2025-03-09 09:26:49.848268+00
244	2	_timescaledb_internal	_hyper_2_244_chunk	\N	f	0	f	2025-03-09 09:26:49.852096+00
245	2	_timescaledb_internal	_hyper_2_245_chunk	\N	f	0	f	2025-03-09 09:26:49.856799+00
246	2	_timescaledb_internal	_hyper_2_246_chunk	\N	f	0	f	2025-03-09 09:26:49.860725+00
247	2	_timescaledb_internal	_hyper_2_247_chunk	\N	f	0	f	2025-03-09 09:26:49.864753+00
\.


--
-- Data for Name: chunk_column_stats; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.chunk_column_stats (id, hypertable_id, chunk_id, column_name, range_start, range_end, valid) FROM stdin;
\.


--
-- Data for Name: dimension; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.dimension (id, hypertable_id, column_name, column_type, aligned, num_slices, partitioning_func_schema, partitioning_func, interval_length, compress_interval_length, integer_now_func_schema, integer_now_func) FROM stdin;
1	1	time	timestamp with time zone	t	\N	\N	\N	604800000000	\N	\N	\N
2	2	period	date	t	\N	\N	\N	604800000000	\N	\N	\N
\.


--
-- Data for Name: dimension_slice; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.dimension_slice (id, dimension_id, range_start, range_end) FROM stdin;
248	2	1703721600000000	1704326400000000
249	2	1706745600000000	1707350400000000
250	2	1709164800000000	1709769600000000
233	2	1727308800000000	1727913600000000
234	2	1730332800000000	1730937600000000
235	2	1732752000000000	1733356800000000
236	2	1735171200000000	1735776000000000
237	2	1738195200000000	1738800000000000
238	2	1740614400000000	1741219200000000
239	2	1743033600000000	1743638400000000
240	2	1746057600000000	1746662400000000
241	2	1748476800000000	1749081600000000
242	2	1750896000000000	1751500800000000
243	2	1753920000000000	1754524800000000
244	2	1756339200000000	1756944000000000
245	2	1758758400000000	1759363200000000
246	2	1761782400000000	1762387200000000
247	2	1764201600000000	1764806400000000
\.


--
-- Data for Name: chunk_constraint; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.chunk_constraint (chunk_id, dimension_slice_id, constraint_name, hypertable_constraint_name) FROM stdin;
248	248	constraint_248	\N
248	\N	248_248_business_financial_data_pkey	business_financial_data_pkey
249	249	constraint_249	\N
249	\N	249_249_business_financial_data_pkey	business_financial_data_pkey
250	250	constraint_250	\N
250	\N	250_250_business_financial_data_pkey	business_financial_data_pkey
233	233	constraint_233	\N
233	\N	233_233_business_financial_data_pkey	business_financial_data_pkey
234	234	constraint_234	\N
234	\N	234_234_business_financial_data_pkey	business_financial_data_pkey
235	235	constraint_235	\N
235	\N	235_235_business_financial_data_pkey	business_financial_data_pkey
236	236	constraint_236	\N
236	\N	236_236_business_financial_data_pkey	business_financial_data_pkey
237	237	constraint_237	\N
237	\N	237_237_business_financial_data_pkey	business_financial_data_pkey
238	238	constraint_238	\N
238	\N	238_238_business_financial_data_pkey	business_financial_data_pkey
239	239	constraint_239	\N
239	\N	239_239_business_financial_data_pkey	business_financial_data_pkey
240	240	constraint_240	\N
240	\N	240_240_business_financial_data_pkey	business_financial_data_pkey
241	241	constraint_241	\N
241	\N	241_241_business_financial_data_pkey	business_financial_data_pkey
242	242	constraint_242	\N
242	\N	242_242_business_financial_data_pkey	business_financial_data_pkey
243	243	constraint_243	\N
243	\N	243_243_business_financial_data_pkey	business_financial_data_pkey
244	244	constraint_244	\N
244	\N	244_244_business_financial_data_pkey	business_financial_data_pkey
245	245	constraint_245	\N
245	\N	245_245_business_financial_data_pkey	business_financial_data_pkey
246	246	constraint_246	\N
246	\N	246_246_business_financial_data_pkey	business_financial_data_pkey
247	247	constraint_247	\N
247	\N	247_247_business_financial_data_pkey	business_financial_data_pkey
\.


--
-- Data for Name: chunk_index; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.chunk_index (chunk_id, index_name, hypertable_id, hypertable_index_name) FROM stdin;
248	248_248_business_financial_data_pkey	2	business_financial_data_pkey
248	_hyper_2_248_chunk_idx_series_reference	2	idx_series_reference
248	_hyper_2_248_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
249	249_249_business_financial_data_pkey	2	business_financial_data_pkey
249	_hyper_2_249_chunk_idx_series_reference	2	idx_series_reference
249	_hyper_2_249_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
250	250_250_business_financial_data_pkey	2	business_financial_data_pkey
250	_hyper_2_250_chunk_idx_series_reference	2	idx_series_reference
250	_hyper_2_250_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
233	233_233_business_financial_data_pkey	2	business_financial_data_pkey
233	_hyper_2_233_chunk_idx_series_reference	2	idx_series_reference
233	_hyper_2_233_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
234	234_234_business_financial_data_pkey	2	business_financial_data_pkey
234	_hyper_2_234_chunk_idx_series_reference	2	idx_series_reference
234	_hyper_2_234_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
235	235_235_business_financial_data_pkey	2	business_financial_data_pkey
235	_hyper_2_235_chunk_idx_series_reference	2	idx_series_reference
235	_hyper_2_235_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
236	236_236_business_financial_data_pkey	2	business_financial_data_pkey
236	_hyper_2_236_chunk_idx_series_reference	2	idx_series_reference
236	_hyper_2_236_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
237	237_237_business_financial_data_pkey	2	business_financial_data_pkey
237	_hyper_2_237_chunk_idx_series_reference	2	idx_series_reference
237	_hyper_2_237_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
238	238_238_business_financial_data_pkey	2	business_financial_data_pkey
238	_hyper_2_238_chunk_idx_series_reference	2	idx_series_reference
238	_hyper_2_238_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
239	239_239_business_financial_data_pkey	2	business_financial_data_pkey
239	_hyper_2_239_chunk_idx_series_reference	2	idx_series_reference
239	_hyper_2_239_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
240	240_240_business_financial_data_pkey	2	business_financial_data_pkey
240	_hyper_2_240_chunk_idx_series_reference	2	idx_series_reference
240	_hyper_2_240_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
241	241_241_business_financial_data_pkey	2	business_financial_data_pkey
241	_hyper_2_241_chunk_idx_series_reference	2	idx_series_reference
241	_hyper_2_241_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
242	242_242_business_financial_data_pkey	2	business_financial_data_pkey
242	_hyper_2_242_chunk_idx_series_reference	2	idx_series_reference
242	_hyper_2_242_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
243	243_243_business_financial_data_pkey	2	business_financial_data_pkey
243	_hyper_2_243_chunk_idx_series_reference	2	idx_series_reference
243	_hyper_2_243_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
244	244_244_business_financial_data_pkey	2	business_financial_data_pkey
244	_hyper_2_244_chunk_idx_series_reference	2	idx_series_reference
244	_hyper_2_244_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
245	245_245_business_financial_data_pkey	2	business_financial_data_pkey
245	_hyper_2_245_chunk_idx_series_reference	2	idx_series_reference
245	_hyper_2_245_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
246	246_246_business_financial_data_pkey	2	business_financial_data_pkey
246	_hyper_2_246_chunk_idx_series_reference	2	idx_series_reference
246	_hyper_2_246_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
247	247_247_business_financial_data_pkey	2	business_financial_data_pkey
247	_hyper_2_247_chunk_idx_series_reference	2	idx_series_reference
247	_hyper_2_247_chunk_business_financial_data_period_idx	2	business_financial_data_period_idx
233	_hyper_2_233_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
234	_hyper_2_234_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
235	_hyper_2_235_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
236	_hyper_2_236_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
237	_hyper_2_237_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
238	_hyper_2_238_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
239	_hyper_2_239_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
240	_hyper_2_240_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
241	_hyper_2_241_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
242	_hyper_2_242_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
243	_hyper_2_243_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
244	_hyper_2_244_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
245	_hyper_2_245_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
246	_hyper_2_246_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
247	_hyper_2_247_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
248	_hyper_2_248_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
249	_hyper_2_249_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
250	_hyper_2_250_chunk_business_financial_data_period_idx_1	2	business_financial_data_period_idx
233	_hyper_2_233_chunk_idx_series_reference_1	2	idx_series_reference
234	_hyper_2_234_chunk_idx_series_reference_1	2	idx_series_reference
235	_hyper_2_235_chunk_idx_series_reference_1	2	idx_series_reference
236	_hyper_2_236_chunk_idx_series_reference_1	2	idx_series_reference
237	_hyper_2_237_chunk_idx_series_reference_1	2	idx_series_reference
238	_hyper_2_238_chunk_idx_series_reference_1	2	idx_series_reference
239	_hyper_2_239_chunk_idx_series_reference_1	2	idx_series_reference
240	_hyper_2_240_chunk_idx_series_reference_1	2	idx_series_reference
241	_hyper_2_241_chunk_idx_series_reference_1	2	idx_series_reference
242	_hyper_2_242_chunk_idx_series_reference_1	2	idx_series_reference
243	_hyper_2_243_chunk_idx_series_reference_1	2	idx_series_reference
244	_hyper_2_244_chunk_idx_series_reference_1	2	idx_series_reference
245	_hyper_2_245_chunk_idx_series_reference_1	2	idx_series_reference
246	_hyper_2_246_chunk_idx_series_reference_1	2	idx_series_reference
247	_hyper_2_247_chunk_idx_series_reference_1	2	idx_series_reference
248	_hyper_2_248_chunk_idx_series_reference_1	2	idx_series_reference
249	_hyper_2_249_chunk_idx_series_reference_1	2	idx_series_reference
250	_hyper_2_250_chunk_idx_series_reference_1	2	idx_series_reference
\.


--
-- Data for Name: compression_chunk_size; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.compression_chunk_size (chunk_id, compressed_chunk_id, uncompressed_heap_size, uncompressed_toast_size, uncompressed_index_size, compressed_heap_size, compressed_toast_size, compressed_index_size, numrows_pre_compression, numrows_post_compression, numrows_frozen_immediately) FROM stdin;
\.


--
-- Data for Name: compression_settings; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.compression_settings (relid, segmentby, orderby, orderby_desc, orderby_nullsfirst) FROM stdin;
\.


--
-- Data for Name: continuous_agg; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.continuous_agg (mat_hypertable_id, raw_hypertable_id, parent_mat_hypertable_id, user_view_schema, user_view_name, partial_view_schema, partial_view_name, direct_view_schema, direct_view_name, materialized_only, finalized) FROM stdin;
\.


--
-- Data for Name: continuous_agg_migrate_plan; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.continuous_agg_migrate_plan (mat_hypertable_id, start_ts, end_ts, user_view_definition) FROM stdin;
\.


--
-- Data for Name: continuous_agg_migrate_plan_step; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.continuous_agg_migrate_plan_step (mat_hypertable_id, step_id, status, start_ts, end_ts, type, config) FROM stdin;
\.


--
-- Data for Name: continuous_aggs_bucket_function; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.continuous_aggs_bucket_function (mat_hypertable_id, bucket_func, bucket_width, bucket_origin, bucket_offset, bucket_timezone, bucket_fixed_width) FROM stdin;
\.


--
-- Data for Name: continuous_aggs_hypertable_invalidation_log; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.continuous_aggs_hypertable_invalidation_log (hypertable_id, lowest_modified_value, greatest_modified_value) FROM stdin;
\.


--
-- Data for Name: continuous_aggs_invalidation_threshold; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.continuous_aggs_invalidation_threshold (hypertable_id, watermark) FROM stdin;
\.


--
-- Data for Name: continuous_aggs_materialization_invalidation_log; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.continuous_aggs_materialization_invalidation_log (materialization_id, lowest_modified_value, greatest_modified_value) FROM stdin;
\.


--
-- Data for Name: continuous_aggs_watermark; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.continuous_aggs_watermark (mat_hypertable_id, watermark) FROM stdin;
\.


--
-- Data for Name: metadata; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.metadata (key, value, include_in_telemetry) FROM stdin;
install_timestamp	2025-03-08 00:42:52.592212+00	t
timescaledb_version	2.18.2	f
exported_uuid	17db6e1b-217a-41f9-9a31-7dc4bed71fce	t
\.


--
-- Data for Name: tablespace; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: admin
--

COPY _timescaledb_catalog.tablespace (id, hypertable_id, tablespace_name) FROM stdin;
\.


--
-- Data for Name: bgw_job; Type: TABLE DATA; Schema: _timescaledb_config; Owner: admin
--

COPY _timescaledb_config.bgw_job (id, application_name, schedule_interval, max_runtime, max_retries, retry_period, proc_schema, proc_name, owner, scheduled, fixed_schedule, initial_start, hypertable_id, config, check_schema, check_name, timezone) FROM stdin;
\.


--
-- Data for Name: _hyper_2_233_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_233_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
951	BDCQ.GDP	97256.68	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2024-10-01
952	BDCQ.Inflation	73205.85	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2024-10-01
953	BDCQ.Employment	73529.32	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2024-10-01
954	BDCQ.Exports	33257.21	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2024-10-01
955	BDCQ.Imports	7384.36	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2024-10-01
956	BDCQ.Manufacturing	18753.69	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2024-10-01
\.


--
-- Data for Name: _hyper_2_234_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_234_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
957	BDCQ.GDP	38362.46	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2024-11-01
958	BDCQ.Inflation	52831.85	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2024-11-01
959	BDCQ.Employment	24985.81	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2024-11-01
960	BDCQ.Exports	29719.64	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2024-11-01
961	BDCQ.Imports	43361.85	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2024-11-01
962	BDCQ.Manufacturing	86734.48	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2024-11-01
\.


--
-- Data for Name: _hyper_2_235_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_235_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
963	BDCQ.GDP	88006.08	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2024-12-01
964	BDCQ.Inflation	84029.21	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2024-12-01
965	BDCQ.Employment	75272.83	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2024-12-01
966	BDCQ.Exports	38272.31	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2024-12-01
967	BDCQ.Imports	98113.59	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2024-12-01
968	BDCQ.Manufacturing	17471.56	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2024-12-01
\.


--
-- Data for Name: _hyper_2_236_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_236_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
969	BDCQ.GDP	41101.40	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2025-01-01
970	BDCQ.Inflation	902.13	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2025-01-01
971	BDCQ.Employment	82646.53	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2025-01-01
972	BDCQ.Exports	99011.16	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2025-01-01
973	BDCQ.Imports	55843.23	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2025-01-01
974	BDCQ.Manufacturing	27676.66	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2025-01-01
\.


--
-- Data for Name: _hyper_2_237_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_237_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
975	BDCQ.GDP	53830.99	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2025-02-01
976	BDCQ.Inflation	11384.09	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2025-02-01
977	BDCQ.Employment	18811.55	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2025-02-01
978	BDCQ.Exports	56000.96	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2025-02-01
979	BDCQ.Imports	18719.37	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2025-02-01
980	BDCQ.Manufacturing	79895.25	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2025-02-01
\.


--
-- Data for Name: _hyper_2_238_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_238_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
981	BDCQ.GDP	68843.81	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2025-03-01
982	BDCQ.Inflation	9950.60	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2025-03-01
983	BDCQ.Employment	84991.08	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2025-03-01
984	BDCQ.Exports	10.15	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2025-03-01
985	BDCQ.Imports	71835.10	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2025-03-01
986	BDCQ.Manufacturing	61816.55	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2025-03-01
\.


--
-- Data for Name: _hyper_2_239_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_239_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
987	BDCQ.GDP	52386.80	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2025-04-01
988	BDCQ.Inflation	51387.96	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2025-04-01
989	BDCQ.Employment	31098.76	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2025-04-01
990	BDCQ.Exports	81583.97	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2025-04-01
991	BDCQ.Imports	22522.79	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2025-04-01
992	BDCQ.Manufacturing	52139.24	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2025-04-01
\.


--
-- Data for Name: _hyper_2_240_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_240_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
993	BDCQ.GDP	40055.16	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2025-05-01
994	BDCQ.Inflation	56959.52	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2025-05-01
995	BDCQ.Employment	48125.72	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2025-05-01
996	BDCQ.Exports	72330.94	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2025-05-01
997	BDCQ.Imports	99829.93	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2025-05-01
998	BDCQ.Manufacturing	29388.02	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2025-05-01
\.


--
-- Data for Name: _hyper_2_241_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_241_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
999	BDCQ.GDP	49875.90	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2025-06-01
1000	BDCQ.Inflation	55435.59	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2025-06-01
1001	BDCQ.Employment	72691.65	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2025-06-01
1002	BDCQ.Exports	73104.42	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2025-06-01
1003	BDCQ.Imports	80145.94	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2025-06-01
1004	BDCQ.Manufacturing	76174.95	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2025-06-01
\.


--
-- Data for Name: _hyper_2_242_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_242_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
1005	BDCQ.GDP	21132.58	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2025-07-01
1006	BDCQ.Inflation	87329.86	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2025-07-01
1007	BDCQ.Employment	9632.35	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2025-07-01
1008	BDCQ.Exports	23998.33	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2025-07-01
1009	BDCQ.Imports	16108.88	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2025-07-01
1010	BDCQ.Manufacturing	76727.02	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2025-07-01
\.


--
-- Data for Name: _hyper_2_243_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_243_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
1011	BDCQ.GDP	58422.55	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2025-08-01
1012	BDCQ.Inflation	44531.54	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2025-08-01
1013	BDCQ.Employment	74889.01	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2025-08-01
1014	BDCQ.Exports	45482.27	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2025-08-01
1015	BDCQ.Imports	17203.78	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2025-08-01
1016	BDCQ.Manufacturing	93316.17	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2025-08-01
\.


--
-- Data for Name: _hyper_2_244_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_244_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
1017	BDCQ.GDP	86551.45	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2025-09-01
1018	BDCQ.Inflation	16992.87	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2025-09-01
1019	BDCQ.Employment	88451.80	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2025-09-01
1020	BDCQ.Exports	73925.09	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2025-09-01
1021	BDCQ.Imports	92929.94	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2025-09-01
1022	BDCQ.Manufacturing	38032.78	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2025-09-01
\.


--
-- Data for Name: _hyper_2_245_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_245_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
1023	BDCQ.GDP	79445.59	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2025-10-01
1024	BDCQ.Inflation	8295.76	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2025-10-01
1025	BDCQ.Employment	45291.76	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2025-10-01
1026	BDCQ.Exports	15188.37	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2025-10-01
1027	BDCQ.Imports	58312.66	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2025-10-01
1028	BDCQ.Manufacturing	53387.54	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2025-10-01
\.


--
-- Data for Name: _hyper_2_246_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_246_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
1029	BDCQ.GDP	46881.95	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2025-11-01
1030	BDCQ.Inflation	26846.90	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2025-11-01
1031	BDCQ.Employment	27052.76	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2025-11-01
1032	BDCQ.Exports	62875.26	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2025-11-01
1033	BDCQ.Imports	2364.33	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2025-11-01
1034	BDCQ.Manufacturing	28448.89	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2025-11-01
\.


--
-- Data for Name: _hyper_2_247_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_247_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
1035	BDCQ.GDP	9213.90	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2025-12-01
1036	BDCQ.Inflation	43682.36	f	F	Dollars	1	Inflation	Economic Indicators	\N	\N	\N	\N	\N	2025-12-01
1037	BDCQ.Employment	24893.78	f	F	Dollars	1	Employment	Economic Indicators	\N	\N	\N	\N	\N	2025-12-01
1038	BDCQ.Exports	27255.83	f	F	Dollars	1	Exports	Economic Indicators	\N	\N	\N	\N	\N	2025-12-01
1039	BDCQ.Imports	8763.12	f	F	Dollars	1	Imports	Economic Indicators	\N	\N	\N	\N	\N	2025-12-01
1040	BDCQ.Manufacturing	68191.24	f	F	Dollars	1	Manufacturing	Economic Indicators	\N	\N	\N	\N	\N	2025-12-01
\.


--
-- Data for Name: _hyper_2_248_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_248_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
1041	BDCQ.GDP	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2024-01-01
\.


--
-- Data for Name: _hyper_2_249_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_249_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
1042	BDCQ.GDP	6000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2024-02-01
\.


--
-- Data for Name: _hyper_2_250_chunk; Type: TABLE DATA; Schema: _timescaledb_internal; Owner: admin
--

COPY _timescaledb_internal._hyper_2_250_chunk (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
1043	BDCQ.GDP	7000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N	2024-03-01
\.


--
-- Data for Name: business_financial_data; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.business_financial_data (id, series_reference, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5, period) FROM stdin;
\.


--
-- Data for Name: business_financial_data_backup; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.business_financial_data_backup (id, series_reference, period, data_value, suppressed, status, units, magnitude, subject, group_name, series_title_1, series_title_2, series_title_3, series_title_4, series_title_5) FROM stdin;
1	BDCQ.SEA	2024-01	5000	f	F	Dollars	1	GDP	Economic Indicators	GDP Growth	\N	\N	\N	\N
2	BDCQ.SEA	2024-02	5100	f	F	Dollars	1	GDP	Economic Indicators	GDP Growth	\N	\N	\N	\N
3	BDCQ.SEA	2024-03	5200	f	F	Dollars	1	GDP	Economic Indicators	GDP Growth	\N	\N	\N	\N
5	BDCQ.EU	2024-05	79724.4106784567	t	F	Dollars	2	Inflation	Economic Indicators	Inflation Rate	\N	\N	\N	\N
6	BDCQ.ASIA	2024-06	10090.9274843708	f	F	Dollars	5	Employment	Economic Indicators	Employment Level	\N	\N	\N	\N
7	BDCQ.AFR	2024-07	1739.44358156668	f	F	Dollars	1	\N	Economic Indicators	\N	\N	\N	\N	\N
4	BDCQ.USA	2024-04	19014.0682298811	f	F	Dollars	3	GDP	Economic Indicators	GDP Growth	\N	\N	\N	\N
15	BDCQ.ASIA	2015-03	17539.2494421744	f	F	Dollars	4	Employment	Economic Indicators	Employment Level	\N	\N	\N	\N
145	BDCQ.SEA	2023-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
146	BDCQ.SEA	2019-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
147	BDCQ.SEA	2017-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
13	BDCQ.USA	2015-01	25107.2159012437	f	F	Dollars	1	GDP	Economic Indicators	GDP Growth	\N	\N	\N	\N
14	BDCQ.EU	2015-02	51263.6426168867	f	F	Dollars	4	Inflation	Economic Indicators	Inflation Rate	\N	\N	\N	\N
16	BDCQ.AFR	2015-04	61867.658064726	f	F	Dollars	1	\N	Economic Indicators	\N	\N	\N	\N	\N
148	BDCQ.SEA	2023-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
149	BDCQ.SEA	2023-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
150	BDCQ.SEA	2020-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
151	BDCQ.SEA	2022-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
152	BDCQ.SEA	2021-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
153	BDCQ.SEA	2019-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
154	BDCQ.SEA	2021-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
155	BDCQ.SEA	2019-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
156	BDCQ.SEA	2022-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
157	BDCQ.SEA	2020-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
158	BDCQ.SEA	2018-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
159	BDCQ.SEA	2015-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
160	BDCQ.SEA	2018-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
161	BDCQ.SEA	2020-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
162	BDCQ.SEA	2019-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
163	BDCQ.SEA	2020-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
164	BDCQ.SEA	2018-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
165	BDCQ.SEA	2022-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
166	BDCQ.SEA	2023-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
167	BDCQ.SEA	2017-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
168	BDCQ.SEA	2022-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
169	BDCQ.SEA	2019-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
170	BDCQ.SEA	2017-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
171	BDCQ.SEA	2015-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
172	BDCQ.SEA	2018-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
173	BDCQ.SEA	2020-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
174	BDCQ.SEA	2016-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
175	BDCQ.SEA	2016-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
176	BDCQ.SEA	2017-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
177	BDCQ.SEA	2022-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
178	BDCQ.SEA	2020-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
179	BDCQ.SEA	2021-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
180	BDCQ.SEA	2015-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
181	BDCQ.SEA	2016-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
182	BDCQ.SEA	2018-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
183	BDCQ.SEA	2022-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
184	BDCQ.SEA	2021-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
185	BDCQ.SEA	2017-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
186	BDCQ.SEA	2019-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
187	BDCQ.SEA	2020-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
188	BDCQ.SEA	2019-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
189	BDCQ.SEA	2016-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
190	BDCQ.SEA	2017-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
191	BDCQ.SEA	2015-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
192	BDCQ.SEA	2022-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
193	BDCQ.SEA	2015-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
194	BDCQ.SEA	2022-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
195	BDCQ.SEA	2016-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
196	BDCQ.SEA	2020-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
197	BDCQ.SEA	2021-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
198	BDCQ.SEA	2021-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
199	BDCQ.SEA	2023-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
200	BDCQ.SEA	2015-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
201	BDCQ.SEA	2015-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
202	BDCQ.SEA	2017-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
203	BDCQ.SEA	2019-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
204	BDCQ.SEA	2022-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
205	BDCQ.SEA	2023-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
206	BDCQ.SEA	2020-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
207	BDCQ.SEA	2018-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
208	BDCQ.SEA	2022-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
209	BDCQ.SEA	2022-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
210	BDCQ.SEA	2018-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
211	BDCQ.SEA	2021-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
212	BDCQ.SEA	2018-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
213	BDCQ.SEA	2018-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
214	BDCQ.SEA	2020-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
215	BDCQ.SEA	2023-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
216	BDCQ.SEA	2021-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
217	BDCQ.SEA	2023-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
218	BDCQ.SEA	2023-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
219	BDCQ.SEA	2015-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
220	BDCQ.SEA	2018-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
221	BDCQ.SEA	2016-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
222	BDCQ.SEA	2017-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
223	BDCQ.SEA	2021-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
224	BDCQ.SEA	2016-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
225	BDCQ.SEA	2020-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
226	BDCQ.SEA	2023-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
227	BDCQ.SEA	2017-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
228	BDCQ.SEA	2018-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
229	BDCQ.SEA	2021-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
230	BDCQ.SEA	2016-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
231	BDCQ.SEA	2021-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
232	BDCQ.SEA	2016-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
233	BDCQ.SEA	2017-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
234	BDCQ.SEA	2017-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
235	BDCQ.SEA	2023-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
236	BDCQ.SEA	2020-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
237	BDCQ.SEA	2016-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
238	BDCQ.SEA	2022-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
239	BDCQ.SEA	2019-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
240	BDCQ.SEA	2019-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
241	BDCQ.SEA	2021-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
242	BDCQ.SEA	2016-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
243	BDCQ.SEA	2019-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
244	BDCQ.SEA	2019-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
245	BDCQ.SEA	2017-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
246	BDCQ.SEA	2016-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
247	BDCQ.SEA	2023-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
248	BDCQ.SEA	2018-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
1	BDCQ.SEA	2024-01	5000	f	F	Dollars	1	GDP	Economic Indicators	GDP Growth	\N	\N	\N	\N
2	BDCQ.SEA	2024-02	5100	f	F	Dollars	1	GDP	Economic Indicators	GDP Growth	\N	\N	\N	\N
3	BDCQ.SEA	2024-03	5200	f	F	Dollars	1	GDP	Economic Indicators	GDP Growth	\N	\N	\N	\N
5	BDCQ.EU	2024-05	79724.4106784567	t	F	Dollars	2	Inflation	Economic Indicators	Inflation Rate	\N	\N	\N	\N
6	BDCQ.ASIA	2024-06	10090.9274843708	f	F	Dollars	5	Employment	Economic Indicators	Employment Level	\N	\N	\N	\N
7	BDCQ.AFR	2024-07	1739.44358156668	f	F	Dollars	1	\N	Economic Indicators	\N	\N	\N	\N	\N
4	BDCQ.USA	2024-04	19014.0682298811	f	F	Dollars	3	GDP	Economic Indicators	GDP Growth	\N	\N	\N	\N
15	BDCQ.ASIA	2015-03	17539.2494421744	f	F	Dollars	4	Employment	Economic Indicators	Employment Level	\N	\N	\N	\N
145	BDCQ.SEA	2023-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
146	BDCQ.SEA	2019-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
147	BDCQ.SEA	2017-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
13	BDCQ.USA	2015-01	25107.2159012437	f	F	Dollars	1	GDP	Economic Indicators	GDP Growth	\N	\N	\N	\N
14	BDCQ.EU	2015-02	51263.6426168867	f	F	Dollars	4	Inflation	Economic Indicators	Inflation Rate	\N	\N	\N	\N
16	BDCQ.AFR	2015-04	61867.658064726	f	F	Dollars	1	\N	Economic Indicators	\N	\N	\N	\N	\N
148	BDCQ.SEA	2023-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
149	BDCQ.SEA	2023-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
150	BDCQ.SEA	2020-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
151	BDCQ.SEA	2022-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
152	BDCQ.SEA	2021-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
153	BDCQ.SEA	2019-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
154	BDCQ.SEA	2021-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
155	BDCQ.SEA	2019-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
156	BDCQ.SEA	2022-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
157	BDCQ.SEA	2020-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
158	BDCQ.SEA	2018-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
159	BDCQ.SEA	2015-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
160	BDCQ.SEA	2018-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
161	BDCQ.SEA	2020-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
162	BDCQ.SEA	2019-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
163	BDCQ.SEA	2020-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
164	BDCQ.SEA	2018-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
165	BDCQ.SEA	2022-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
166	BDCQ.SEA	2023-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
167	BDCQ.SEA	2017-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
168	BDCQ.SEA	2022-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
169	BDCQ.SEA	2019-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
170	BDCQ.SEA	2017-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
171	BDCQ.SEA	2015-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
172	BDCQ.SEA	2018-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
173	BDCQ.SEA	2020-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
174	BDCQ.SEA	2016-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
175	BDCQ.SEA	2016-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
176	BDCQ.SEA	2017-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
177	BDCQ.SEA	2022-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
178	BDCQ.SEA	2020-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
179	BDCQ.SEA	2021-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
180	BDCQ.SEA	2015-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
181	BDCQ.SEA	2016-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
182	BDCQ.SEA	2018-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
183	BDCQ.SEA	2022-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
184	BDCQ.SEA	2021-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
185	BDCQ.SEA	2017-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
186	BDCQ.SEA	2019-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
187	BDCQ.SEA	2020-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
188	BDCQ.SEA	2019-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
189	BDCQ.SEA	2016-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
190	BDCQ.SEA	2017-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
191	BDCQ.SEA	2015-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
192	BDCQ.SEA	2022-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
193	BDCQ.SEA	2015-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
194	BDCQ.SEA	2022-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
195	BDCQ.SEA	2016-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
196	BDCQ.SEA	2020-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
197	BDCQ.SEA	2021-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
198	BDCQ.SEA	2021-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
199	BDCQ.SEA	2023-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
200	BDCQ.SEA	2015-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
201	BDCQ.SEA	2015-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
202	BDCQ.SEA	2017-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
203	BDCQ.SEA	2019-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
204	BDCQ.SEA	2022-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
205	BDCQ.SEA	2023-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
206	BDCQ.SEA	2020-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
207	BDCQ.SEA	2018-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
208	BDCQ.SEA	2022-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
209	BDCQ.SEA	2022-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
210	BDCQ.SEA	2018-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
211	BDCQ.SEA	2021-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
212	BDCQ.SEA	2018-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
213	BDCQ.SEA	2018-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
214	BDCQ.SEA	2020-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
215	BDCQ.SEA	2023-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
216	BDCQ.SEA	2021-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
217	BDCQ.SEA	2023-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
218	BDCQ.SEA	2023-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
219	BDCQ.SEA	2015-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
220	BDCQ.SEA	2018-02	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
221	BDCQ.SEA	2016-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
222	BDCQ.SEA	2017-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
223	BDCQ.SEA	2021-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
224	BDCQ.SEA	2016-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
225	BDCQ.SEA	2020-10	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
226	BDCQ.SEA	2023-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
227	BDCQ.SEA	2017-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
228	BDCQ.SEA	2018-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
229	BDCQ.SEA	2021-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
230	BDCQ.SEA	2016-12	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
231	BDCQ.SEA	2021-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
232	BDCQ.SEA	2016-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
233	BDCQ.SEA	2017-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
234	BDCQ.SEA	2017-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
235	BDCQ.SEA	2023-01	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
236	BDCQ.SEA	2020-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
237	BDCQ.SEA	2016-09	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
238	BDCQ.SEA	2022-05	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
239	BDCQ.SEA	2019-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
240	BDCQ.SEA	2019-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
241	BDCQ.SEA	2021-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
242	BDCQ.SEA	2016-08	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
243	BDCQ.SEA	2019-11	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
244	BDCQ.SEA	2019-06	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
245	BDCQ.SEA	2017-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
246	BDCQ.SEA	2016-03	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
247	BDCQ.SEA	2023-07	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
248	BDCQ.SEA	2018-04	5000	f	F	Dollars	1	GDP	Economic Indicators	\N	\N	\N	\N	\N
\.


--
-- Data for Name: metrics; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.metrics ("time", device_id, temperature, humidity) FROM stdin;
\.


--
-- Data for Name: reference_financial_data; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.reference_financial_data (series_reference, period, expected_value) FROM stdin;
BDCQ.SEA	2024-01	5000
BDCQ.SEA	2024-02	5100
BDCQ.SEA	2024-03	5200
BDCQ.AFR	2024-07	89508.31
BDCQ.ASIA	2024-06	58030.53
BDCQ.EU	2024-05	73750.80
BDCQ.USA	2024-04	92120.05
BDCQ.AFR	2015-04	64672.88
BDCQ.EU	2015-02	27748.00
BDCQ.ASIA	2015-03	62306.92
BDCQ.USA	2015-01	92317.35
\.


--
-- Name: chunk_column_stats_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: admin
--

SELECT pg_catalog.setval('_timescaledb_catalog.chunk_column_stats_id_seq', 1, false);


--
-- Name: chunk_constraint_name; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: admin
--

SELECT pg_catalog.setval('_timescaledb_catalog.chunk_constraint_name', 250, true);


--
-- Name: chunk_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: admin
--

SELECT pg_catalog.setval('_timescaledb_catalog.chunk_id_seq', 250, true);


--
-- Name: continuous_agg_migrate_plan_step_step_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: admin
--

SELECT pg_catalog.setval('_timescaledb_catalog.continuous_agg_migrate_plan_step_step_id_seq', 1, false);


--
-- Name: dimension_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: admin
--

SELECT pg_catalog.setval('_timescaledb_catalog.dimension_id_seq', 2, true);


--
-- Name: dimension_slice_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: admin
--

SELECT pg_catalog.setval('_timescaledb_catalog.dimension_slice_id_seq', 250, true);


--
-- Name: hypertable_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: admin
--

SELECT pg_catalog.setval('_timescaledb_catalog.hypertable_id_seq', 2, true);


--
-- Name: bgw_job_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_config; Owner: admin
--

SELECT pg_catalog.setval('_timescaledb_config.bgw_job_id_seq', 1000, true);


--
-- Name: business_financial_data_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.business_financial_data_id_seq', 1043, true);


--
-- Name: _hyper_2_233_chunk 233_233_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_233_chunk
    ADD CONSTRAINT "233_233_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_234_chunk 234_234_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_234_chunk
    ADD CONSTRAINT "234_234_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_235_chunk 235_235_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_235_chunk
    ADD CONSTRAINT "235_235_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_236_chunk 236_236_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_236_chunk
    ADD CONSTRAINT "236_236_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_237_chunk 237_237_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_237_chunk
    ADD CONSTRAINT "237_237_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_238_chunk 238_238_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_238_chunk
    ADD CONSTRAINT "238_238_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_239_chunk 239_239_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_239_chunk
    ADD CONSTRAINT "239_239_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_240_chunk 240_240_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_240_chunk
    ADD CONSTRAINT "240_240_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_241_chunk 241_241_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_241_chunk
    ADD CONSTRAINT "241_241_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_242_chunk 242_242_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_242_chunk
    ADD CONSTRAINT "242_242_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_243_chunk 243_243_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_243_chunk
    ADD CONSTRAINT "243_243_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_244_chunk 244_244_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_244_chunk
    ADD CONSTRAINT "244_244_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_245_chunk 245_245_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_245_chunk
    ADD CONSTRAINT "245_245_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_246_chunk 246_246_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_246_chunk
    ADD CONSTRAINT "246_246_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_247_chunk 247_247_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_247_chunk
    ADD CONSTRAINT "247_247_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_248_chunk 248_248_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_248_chunk
    ADD CONSTRAINT "248_248_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_249_chunk 249_249_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_249_chunk
    ADD CONSTRAINT "249_249_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_250_chunk 250_250_business_financial_data_pkey; Type: CONSTRAINT; Schema: _timescaledb_internal; Owner: admin
--

ALTER TABLE ONLY _timescaledb_internal._hyper_2_250_chunk
    ADD CONSTRAINT "250_250_business_financial_data_pkey" PRIMARY KEY (series_reference, period);


--
-- Name: reference_financial_data reference_financial_data_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reference_financial_data
    ADD CONSTRAINT reference_financial_data_pkey PRIMARY KEY (series_reference, period);


--
-- Name: _hyper_2_233_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_233_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_233_chunk USING btree (period DESC);


--
-- Name: _hyper_2_233_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_233_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_233_chunk USING btree (period DESC);


--
-- Name: _hyper_2_233_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_233_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_233_chunk USING btree (series_reference);


--
-- Name: _hyper_2_233_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_233_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_233_chunk USING btree (series_reference);


--
-- Name: _hyper_2_234_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_234_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_234_chunk USING btree (period DESC);


--
-- Name: _hyper_2_234_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_234_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_234_chunk USING btree (period DESC);


--
-- Name: _hyper_2_234_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_234_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_234_chunk USING btree (series_reference);


--
-- Name: _hyper_2_234_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_234_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_234_chunk USING btree (series_reference);


--
-- Name: _hyper_2_235_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_235_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_235_chunk USING btree (period DESC);


--
-- Name: _hyper_2_235_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_235_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_235_chunk USING btree (period DESC);


--
-- Name: _hyper_2_235_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_235_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_235_chunk USING btree (series_reference);


--
-- Name: _hyper_2_235_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_235_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_235_chunk USING btree (series_reference);


--
-- Name: _hyper_2_236_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_236_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_236_chunk USING btree (period DESC);


--
-- Name: _hyper_2_236_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_236_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_236_chunk USING btree (period DESC);


--
-- Name: _hyper_2_236_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_236_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_236_chunk USING btree (series_reference);


--
-- Name: _hyper_2_236_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_236_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_236_chunk USING btree (series_reference);


--
-- Name: _hyper_2_237_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_237_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_237_chunk USING btree (period DESC);


--
-- Name: _hyper_2_237_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_237_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_237_chunk USING btree (period DESC);


--
-- Name: _hyper_2_237_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_237_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_237_chunk USING btree (series_reference);


--
-- Name: _hyper_2_237_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_237_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_237_chunk USING btree (series_reference);


--
-- Name: _hyper_2_238_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_238_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_238_chunk USING btree (period DESC);


--
-- Name: _hyper_2_238_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_238_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_238_chunk USING btree (period DESC);


--
-- Name: _hyper_2_238_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_238_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_238_chunk USING btree (series_reference);


--
-- Name: _hyper_2_238_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_238_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_238_chunk USING btree (series_reference);


--
-- Name: _hyper_2_239_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_239_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_239_chunk USING btree (period DESC);


--
-- Name: _hyper_2_239_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_239_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_239_chunk USING btree (period DESC);


--
-- Name: _hyper_2_239_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_239_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_239_chunk USING btree (series_reference);


--
-- Name: _hyper_2_239_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_239_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_239_chunk USING btree (series_reference);


--
-- Name: _hyper_2_240_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_240_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_240_chunk USING btree (period DESC);


--
-- Name: _hyper_2_240_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_240_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_240_chunk USING btree (period DESC);


--
-- Name: _hyper_2_240_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_240_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_240_chunk USING btree (series_reference);


--
-- Name: _hyper_2_240_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_240_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_240_chunk USING btree (series_reference);


--
-- Name: _hyper_2_241_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_241_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_241_chunk USING btree (period DESC);


--
-- Name: _hyper_2_241_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_241_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_241_chunk USING btree (period DESC);


--
-- Name: _hyper_2_241_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_241_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_241_chunk USING btree (series_reference);


--
-- Name: _hyper_2_241_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_241_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_241_chunk USING btree (series_reference);


--
-- Name: _hyper_2_242_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_242_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_242_chunk USING btree (period DESC);


--
-- Name: _hyper_2_242_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_242_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_242_chunk USING btree (period DESC);


--
-- Name: _hyper_2_242_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_242_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_242_chunk USING btree (series_reference);


--
-- Name: _hyper_2_242_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_242_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_242_chunk USING btree (series_reference);


--
-- Name: _hyper_2_243_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_243_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_243_chunk USING btree (period DESC);


--
-- Name: _hyper_2_243_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_243_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_243_chunk USING btree (period DESC);


--
-- Name: _hyper_2_243_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_243_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_243_chunk USING btree (series_reference);


--
-- Name: _hyper_2_243_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_243_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_243_chunk USING btree (series_reference);


--
-- Name: _hyper_2_244_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_244_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_244_chunk USING btree (period DESC);


--
-- Name: _hyper_2_244_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_244_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_244_chunk USING btree (period DESC);


--
-- Name: _hyper_2_244_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_244_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_244_chunk USING btree (series_reference);


--
-- Name: _hyper_2_244_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_244_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_244_chunk USING btree (series_reference);


--
-- Name: _hyper_2_245_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_245_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_245_chunk USING btree (period DESC);


--
-- Name: _hyper_2_245_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_245_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_245_chunk USING btree (period DESC);


--
-- Name: _hyper_2_245_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_245_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_245_chunk USING btree (series_reference);


--
-- Name: _hyper_2_245_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_245_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_245_chunk USING btree (series_reference);


--
-- Name: _hyper_2_246_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_246_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_246_chunk USING btree (period DESC);


--
-- Name: _hyper_2_246_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_246_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_246_chunk USING btree (period DESC);


--
-- Name: _hyper_2_246_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_246_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_246_chunk USING btree (series_reference);


--
-- Name: _hyper_2_246_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_246_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_246_chunk USING btree (series_reference);


--
-- Name: _hyper_2_247_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_247_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_247_chunk USING btree (period DESC);


--
-- Name: _hyper_2_247_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_247_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_247_chunk USING btree (period DESC);


--
-- Name: _hyper_2_247_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_247_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_247_chunk USING btree (series_reference);


--
-- Name: _hyper_2_247_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_247_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_247_chunk USING btree (series_reference);


--
-- Name: _hyper_2_248_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_248_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_248_chunk USING btree (period DESC);


--
-- Name: _hyper_2_248_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_248_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_248_chunk USING btree (period DESC);


--
-- Name: _hyper_2_248_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_248_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_248_chunk USING btree (series_reference);


--
-- Name: _hyper_2_248_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_248_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_248_chunk USING btree (series_reference);


--
-- Name: _hyper_2_249_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_249_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_249_chunk USING btree (period DESC);


--
-- Name: _hyper_2_249_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_249_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_249_chunk USING btree (period DESC);


--
-- Name: _hyper_2_249_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_249_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_249_chunk USING btree (series_reference);


--
-- Name: _hyper_2_249_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_249_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_249_chunk USING btree (series_reference);


--
-- Name: _hyper_2_250_chunk_business_financial_data_period_idx; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_250_chunk_business_financial_data_period_idx ON _timescaledb_internal._hyper_2_250_chunk USING btree (period DESC);


--
-- Name: _hyper_2_250_chunk_business_financial_data_period_idx_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_250_chunk_business_financial_data_period_idx_1 ON _timescaledb_internal._hyper_2_250_chunk USING btree (period DESC);


--
-- Name: _hyper_2_250_chunk_idx_series_reference; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_250_chunk_idx_series_reference ON _timescaledb_internal._hyper_2_250_chunk USING btree (series_reference);


--
-- Name: _hyper_2_250_chunk_idx_series_reference_1; Type: INDEX; Schema: _timescaledb_internal; Owner: admin
--

CREATE INDEX _hyper_2_250_chunk_idx_series_reference_1 ON _timescaledb_internal._hyper_2_250_chunk USING btree (series_reference);


--
-- Name: business_financial_data_period_idx; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX business_financial_data_period_idx ON public.business_financial_data USING btree (period DESC);


--
-- Name: idx_reference_series_period; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX idx_reference_series_period ON public.reference_financial_data USING btree (series_reference, period);


--
-- Name: idx_series_reference; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX idx_series_reference ON public.business_financial_data USING btree (series_reference);


--
-- Name: metrics_time_idx; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX metrics_time_idx ON public.metrics USING btree ("time" DESC);


--
-- Name: _hyper_2_233_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_233_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_234_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_234_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_235_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_235_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_236_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_236_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_237_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_237_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_238_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_238_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_239_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_239_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_240_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_240_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_241_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_241_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_242_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_242_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_243_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_243_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_244_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_244_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_245_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_245_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_246_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_246_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_247_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_247_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_248_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_248_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_249_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_249_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: _hyper_2_250_chunk ts_insert_blocker; Type: TRIGGER; Schema: _timescaledb_internal; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON _timescaledb_internal._hyper_2_250_chunk FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: business_financial_data ts_insert_blocker; Type: TRIGGER; Schema: public; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON public.business_financial_data FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: metrics ts_insert_blocker; Type: TRIGGER; Schema: public; Owner: admin
--

CREATE TRIGGER ts_insert_blocker BEFORE INSERT ON public.metrics FOR EACH ROW EXECUTE FUNCTION _timescaledb_functions.insert_blocker();


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT ALL ON SCHEMA public TO test_user;


--
-- Name: FUNCTION add_compression_policy(hypertable regclass, compress_after "any", if_not_exists boolean, schedule_interval interval, initial_start timestamp with time zone, timezone text, compress_created_before interval, hypercore_use_access_method boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.add_compression_policy(hypertable regclass, compress_after "any", if_not_exists boolean, schedule_interval interval, initial_start timestamp with time zone, timezone text, compress_created_before interval, hypercore_use_access_method boolean) TO test_user;


--
-- Name: FUNCTION add_continuous_aggregate_policy(continuous_aggregate regclass, start_offset "any", end_offset "any", schedule_interval interval, if_not_exists boolean, initial_start timestamp with time zone, timezone text, include_tiered_data boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.add_continuous_aggregate_policy(continuous_aggregate regclass, start_offset "any", end_offset "any", schedule_interval interval, if_not_exists boolean, initial_start timestamp with time zone, timezone text, include_tiered_data boolean) TO test_user;


--
-- Name: FUNCTION add_dimension(hypertable regclass, dimension _timescaledb_internal.dimension_info, if_not_exists boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.add_dimension(hypertable regclass, dimension _timescaledb_internal.dimension_info, if_not_exists boolean) TO test_user;


--
-- Name: FUNCTION add_dimension(hypertable regclass, column_name name, number_partitions integer, chunk_time_interval anyelement, partitioning_func regproc, if_not_exists boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.add_dimension(hypertable regclass, column_name name, number_partitions integer, chunk_time_interval anyelement, partitioning_func regproc, if_not_exists boolean) TO test_user;


--
-- Name: FUNCTION add_job(proc regproc, schedule_interval interval, config jsonb, initial_start timestamp with time zone, scheduled boolean, check_config regproc, fixed_schedule boolean, timezone text); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.add_job(proc regproc, schedule_interval interval, config jsonb, initial_start timestamp with time zone, scheduled boolean, check_config regproc, fixed_schedule boolean, timezone text) TO test_user;


--
-- Name: FUNCTION add_reorder_policy(hypertable regclass, index_name name, if_not_exists boolean, initial_start timestamp with time zone, timezone text); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.add_reorder_policy(hypertable regclass, index_name name, if_not_exists boolean, initial_start timestamp with time zone, timezone text) TO test_user;


--
-- Name: FUNCTION add_retention_policy(relation regclass, drop_after "any", if_not_exists boolean, schedule_interval interval, initial_start timestamp with time zone, timezone text, drop_created_before interval); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.add_retention_policy(relation regclass, drop_after "any", if_not_exists boolean, schedule_interval interval, initial_start timestamp with time zone, timezone text, drop_created_before interval) TO test_user;


--
-- Name: FUNCTION alter_job(job_id integer, schedule_interval interval, max_runtime interval, max_retries integer, retry_period interval, scheduled boolean, config jsonb, next_start timestamp with time zone, if_exists boolean, check_config regproc, fixed_schedule boolean, initial_start timestamp with time zone, timezone text); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.alter_job(job_id integer, schedule_interval interval, max_runtime interval, max_retries integer, retry_period interval, scheduled boolean, config jsonb, next_start timestamp with time zone, if_exists boolean, check_config regproc, fixed_schedule boolean, initial_start timestamp with time zone, timezone text) TO test_user;


--
-- Name: FUNCTION approximate_row_count(relation regclass); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.approximate_row_count(relation regclass) TO test_user;


--
-- Name: FUNCTION attach_tablespace(tablespace name, hypertable regclass, if_not_attached boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.attach_tablespace(tablespace name, hypertable regclass, if_not_attached boolean) TO test_user;


--
-- Name: FUNCTION by_hash(column_name name, number_partitions integer, partition_func regproc); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.by_hash(column_name name, number_partitions integer, partition_func regproc) TO test_user;


--
-- Name: FUNCTION by_range(column_name name, partition_interval anyelement, partition_func regproc); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.by_range(column_name name, partition_interval anyelement, partition_func regproc) TO test_user;


--
-- Name: FUNCTION chunk_columnstore_stats(hypertable regclass); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.chunk_columnstore_stats(hypertable regclass) TO test_user;


--
-- Name: FUNCTION chunk_compression_stats(hypertable regclass); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.chunk_compression_stats(hypertable regclass) TO test_user;


--
-- Name: FUNCTION chunks_detailed_size(hypertable regclass); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.chunks_detailed_size(hypertable regclass) TO test_user;


--
-- Name: FUNCTION compress_chunk(uncompressed_chunk regclass, if_not_compressed boolean, recompress boolean, hypercore_use_access_method boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.compress_chunk(uncompressed_chunk regclass, if_not_compressed boolean, recompress boolean, hypercore_use_access_method boolean) TO test_user;


--
-- Name: FUNCTION create_hypertable(relation regclass, dimension _timescaledb_internal.dimension_info, create_default_indexes boolean, if_not_exists boolean, migrate_data boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.create_hypertable(relation regclass, dimension _timescaledb_internal.dimension_info, create_default_indexes boolean, if_not_exists boolean, migrate_data boolean) TO test_user;


--
-- Name: FUNCTION create_hypertable(relation regclass, time_column_name name, partitioning_column name, number_partitions integer, associated_schema_name name, associated_table_prefix name, chunk_time_interval anyelement, create_default_indexes boolean, if_not_exists boolean, partitioning_func regproc, migrate_data boolean, chunk_target_size text, chunk_sizing_func regproc, time_partitioning_func regproc); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.create_hypertable(relation regclass, time_column_name name, partitioning_column name, number_partitions integer, associated_schema_name name, associated_table_prefix name, chunk_time_interval anyelement, create_default_indexes boolean, if_not_exists boolean, partitioning_func regproc, migrate_data boolean, chunk_target_size text, chunk_sizing_func regproc, time_partitioning_func regproc) TO test_user;


--
-- Name: FUNCTION decompress_chunk(uncompressed_chunk regclass, if_compressed boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.decompress_chunk(uncompressed_chunk regclass, if_compressed boolean) TO test_user;


--
-- Name: FUNCTION delete_job(job_id integer); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.delete_job(job_id integer) TO test_user;


--
-- Name: FUNCTION detach_tablespace(tablespace name, hypertable regclass, if_attached boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.detach_tablespace(tablespace name, hypertable regclass, if_attached boolean) TO test_user;


--
-- Name: FUNCTION detach_tablespaces(hypertable regclass); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.detach_tablespaces(hypertable regclass) TO test_user;


--
-- Name: FUNCTION disable_chunk_skipping(hypertable regclass, column_name name, if_not_exists boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.disable_chunk_skipping(hypertable regclass, column_name name, if_not_exists boolean) TO test_user;


--
-- Name: FUNCTION drop_chunks(relation regclass, older_than "any", newer_than "any", "verbose" boolean, created_before "any", created_after "any"); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.drop_chunks(relation regclass, older_than "any", newer_than "any", "verbose" boolean, created_before "any", created_after "any") TO test_user;


--
-- Name: FUNCTION enable_chunk_skipping(hypertable regclass, column_name name, if_not_exists boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.enable_chunk_skipping(hypertable regclass, column_name name, if_not_exists boolean) TO test_user;


--
-- Name: FUNCTION get_telemetry_report(); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.get_telemetry_report() TO test_user;


--
-- Name: FUNCTION hypertable_approximate_detailed_size(relation regclass); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.hypertable_approximate_detailed_size(relation regclass) TO test_user;


--
-- Name: FUNCTION hypertable_approximate_size(hypertable regclass); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.hypertable_approximate_size(hypertable regclass) TO test_user;


--
-- Name: FUNCTION hypertable_columnstore_stats(hypertable regclass); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.hypertable_columnstore_stats(hypertable regclass) TO test_user;


--
-- Name: FUNCTION hypertable_compression_stats(hypertable regclass); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.hypertable_compression_stats(hypertable regclass) TO test_user;


--
-- Name: FUNCTION hypertable_detailed_size(hypertable regclass); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.hypertable_detailed_size(hypertable regclass) TO test_user;


--
-- Name: FUNCTION hypertable_index_size(index_name regclass); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.hypertable_index_size(index_name regclass) TO test_user;


--
-- Name: FUNCTION hypertable_size(hypertable regclass); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.hypertable_size(hypertable regclass) TO test_user;


--
-- Name: FUNCTION interpolate(value real, prev record, next record); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.interpolate(value real, prev record, next record) TO test_user;


--
-- Name: FUNCTION interpolate(value double precision, prev record, next record); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.interpolate(value double precision, prev record, next record) TO test_user;


--
-- Name: FUNCTION interpolate(value smallint, prev record, next record); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.interpolate(value smallint, prev record, next record) TO test_user;


--
-- Name: FUNCTION interpolate(value integer, prev record, next record); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.interpolate(value integer, prev record, next record) TO test_user;


--
-- Name: FUNCTION interpolate(value bigint, prev record, next record); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.interpolate(value bigint, prev record, next record) TO test_user;


--
-- Name: FUNCTION locf(value anyelement, prev anyelement, treat_null_as_missing boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.locf(value anyelement, prev anyelement, treat_null_as_missing boolean) TO test_user;


--
-- Name: FUNCTION move_chunk(chunk regclass, destination_tablespace name, index_destination_tablespace name, reorder_index regclass, "verbose" boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.move_chunk(chunk regclass, destination_tablespace name, index_destination_tablespace name, reorder_index regclass, "verbose" boolean) TO test_user;


--
-- Name: FUNCTION remove_compression_policy(hypertable regclass, if_exists boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.remove_compression_policy(hypertable regclass, if_exists boolean) TO test_user;


--
-- Name: FUNCTION remove_continuous_aggregate_policy(continuous_aggregate regclass, if_not_exists boolean, if_exists boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.remove_continuous_aggregate_policy(continuous_aggregate regclass, if_not_exists boolean, if_exists boolean) TO test_user;


--
-- Name: FUNCTION remove_reorder_policy(hypertable regclass, if_exists boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.remove_reorder_policy(hypertable regclass, if_exists boolean) TO test_user;


--
-- Name: FUNCTION remove_retention_policy(relation regclass, if_exists boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.remove_retention_policy(relation regclass, if_exists boolean) TO test_user;


--
-- Name: FUNCTION reorder_chunk(chunk regclass, index regclass, "verbose" boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.reorder_chunk(chunk regclass, index regclass, "verbose" boolean) TO test_user;


--
-- Name: FUNCTION set_adaptive_chunking(hypertable regclass, chunk_target_size text, INOUT chunk_sizing_func regproc, OUT chunk_target_size bigint); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.set_adaptive_chunking(hypertable regclass, chunk_target_size text, INOUT chunk_sizing_func regproc, OUT chunk_target_size bigint) TO test_user;


--
-- Name: FUNCTION set_chunk_time_interval(hypertable regclass, chunk_time_interval anyelement, dimension_name name); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.set_chunk_time_interval(hypertable regclass, chunk_time_interval anyelement, dimension_name name) TO test_user;


--
-- Name: FUNCTION set_integer_now_func(hypertable regclass, integer_now_func regproc, replace_if_exists boolean); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.set_integer_now_func(hypertable regclass, integer_now_func regproc, replace_if_exists boolean) TO test_user;


--
-- Name: FUNCTION set_number_partitions(hypertable regclass, number_partitions integer, dimension_name name); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.set_number_partitions(hypertable regclass, number_partitions integer, dimension_name name) TO test_user;


--
-- Name: FUNCTION set_partitioning_interval(hypertable regclass, partition_interval anyelement, dimension_name name); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.set_partitioning_interval(hypertable regclass, partition_interval anyelement, dimension_name name) TO test_user;


--
-- Name: FUNCTION show_chunks(relation regclass, older_than "any", newer_than "any", created_before "any", created_after "any"); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.show_chunks(relation regclass, older_than "any", newer_than "any", created_before "any", created_after "any") TO test_user;


--
-- Name: FUNCTION show_tablespaces(hypertable regclass); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.show_tablespaces(hypertable regclass) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width smallint, ts smallint); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width smallint, ts smallint) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width integer, ts integer); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width integer, ts integer) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width bigint, ts bigint); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width bigint, ts bigint) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width interval, ts date); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width interval, ts date) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width interval, ts timestamp without time zone); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width interval, ts timestamp without time zone) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width interval, ts timestamp with time zone); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width interval, ts timestamp with time zone) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width smallint, ts smallint, "offset" smallint); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width smallint, ts smallint, "offset" smallint) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width integer, ts integer, "offset" integer); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width integer, ts integer, "offset" integer) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width bigint, ts bigint, "offset" bigint); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width bigint, ts bigint, "offset" bigint) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width interval, ts date, origin date); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width interval, ts date, origin date) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width interval, ts date, "offset" interval); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width interval, ts date, "offset" interval) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width interval, ts timestamp without time zone, "offset" interval); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width interval, ts timestamp without time zone, "offset" interval) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width interval, ts timestamp without time zone, origin timestamp without time zone); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width interval, ts timestamp without time zone, origin timestamp without time zone) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width interval, ts timestamp with time zone, "offset" interval); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width interval, ts timestamp with time zone, "offset" interval) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width interval, ts timestamp with time zone, origin timestamp with time zone); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width interval, ts timestamp with time zone, origin timestamp with time zone) TO test_user;


--
-- Name: FUNCTION time_bucket(bucket_width interval, ts timestamp with time zone, timezone text, origin timestamp with time zone, "offset" interval); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket(bucket_width interval, ts timestamp with time zone, timezone text, origin timestamp with time zone, "offset" interval) TO test_user;


--
-- Name: FUNCTION time_bucket_gapfill(bucket_width smallint, ts smallint, start smallint, finish smallint); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket_gapfill(bucket_width smallint, ts smallint, start smallint, finish smallint) TO test_user;


--
-- Name: FUNCTION time_bucket_gapfill(bucket_width integer, ts integer, start integer, finish integer); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket_gapfill(bucket_width integer, ts integer, start integer, finish integer) TO test_user;


--
-- Name: FUNCTION time_bucket_gapfill(bucket_width bigint, ts bigint, start bigint, finish bigint); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket_gapfill(bucket_width bigint, ts bigint, start bigint, finish bigint) TO test_user;


--
-- Name: FUNCTION time_bucket_gapfill(bucket_width interval, ts date, start date, finish date); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket_gapfill(bucket_width interval, ts date, start date, finish date) TO test_user;


--
-- Name: FUNCTION time_bucket_gapfill(bucket_width interval, ts timestamp without time zone, start timestamp without time zone, finish timestamp without time zone); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket_gapfill(bucket_width interval, ts timestamp without time zone, start timestamp without time zone, finish timestamp without time zone) TO test_user;


--
-- Name: FUNCTION time_bucket_gapfill(bucket_width interval, ts timestamp with time zone, start timestamp with time zone, finish timestamp with time zone); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket_gapfill(bucket_width interval, ts timestamp with time zone, start timestamp with time zone, finish timestamp with time zone) TO test_user;


--
-- Name: FUNCTION time_bucket_gapfill(bucket_width interval, ts timestamp with time zone, timezone text, start timestamp with time zone, finish timestamp with time zone); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.time_bucket_gapfill(bucket_width interval, ts timestamp with time zone, timezone text, start timestamp with time zone, finish timestamp with time zone) TO test_user;


--
-- Name: FUNCTION timescaledb_post_restore(); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.timescaledb_post_restore() TO test_user;


--
-- Name: FUNCTION timescaledb_pre_restore(); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.timescaledb_pre_restore() TO test_user;


--
-- Name: FUNCTION first(anyelement, "any"); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.first(anyelement, "any") TO test_user;


--
-- Name: FUNCTION histogram(double precision, double precision, double precision, integer); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.histogram(double precision, double precision, double precision, integer) TO test_user;


--
-- Name: FUNCTION last(anyelement, "any"); Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON FUNCTION public.last(anyelement, "any") TO test_user;


--
-- Name: TABLE business_financial_data; Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON TABLE public.business_financial_data TO test_user;


--
-- Name: TABLE _hyper_2_233_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_233_chunk TO test_user;


--
-- Name: TABLE _hyper_2_234_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_234_chunk TO test_user;


--
-- Name: TABLE _hyper_2_235_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_235_chunk TO test_user;


--
-- Name: TABLE _hyper_2_236_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_236_chunk TO test_user;


--
-- Name: TABLE _hyper_2_237_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_237_chunk TO test_user;


--
-- Name: TABLE _hyper_2_238_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_238_chunk TO test_user;


--
-- Name: TABLE _hyper_2_239_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_239_chunk TO test_user;


--
-- Name: TABLE _hyper_2_240_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_240_chunk TO test_user;


--
-- Name: TABLE _hyper_2_241_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_241_chunk TO test_user;


--
-- Name: TABLE _hyper_2_242_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_242_chunk TO test_user;


--
-- Name: TABLE _hyper_2_243_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_243_chunk TO test_user;


--
-- Name: TABLE _hyper_2_244_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_244_chunk TO test_user;


--
-- Name: TABLE _hyper_2_245_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_245_chunk TO test_user;


--
-- Name: TABLE _hyper_2_246_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_246_chunk TO test_user;


--
-- Name: TABLE _hyper_2_247_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_247_chunk TO test_user;


--
-- Name: TABLE _hyper_2_248_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_248_chunk TO test_user;


--
-- Name: TABLE _hyper_2_249_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_249_chunk TO test_user;


--
-- Name: TABLE _hyper_2_250_chunk; Type: ACL; Schema: _timescaledb_internal; Owner: admin
--

GRANT ALL ON TABLE _timescaledb_internal._hyper_2_250_chunk TO test_user;


--
-- Name: TABLE business_financial_data_backup; Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON TABLE public.business_financial_data_backup TO test_user;


--
-- Name: SEQUENCE business_financial_data_id_seq; Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON SEQUENCE public.business_financial_data_id_seq TO test_user;


--
-- Name: TABLE metrics; Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON TABLE public.metrics TO test_user;


--
-- Name: TABLE reference_financial_data; Type: ACL; Schema: public; Owner: admin
--

GRANT ALL ON TABLE public.reference_financial_data TO test_user;


--
-- PostgreSQL database dump complete
--

